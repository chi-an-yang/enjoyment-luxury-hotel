import { Tabs, Tab, Box, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  currentIndex: number;
}
const CustomTabPanel = ({ children, currentIndex, index }: CustomTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={currentIndex !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {currentIndex === index && <Box sx={{ paddingY: 4 }}>{children}</Box>}
    </div>
  );
};

interface TabData {
  label: string;
  panel: ReactNode;
}
interface BasicTabsProps {
  tabs: TabData[];
  index?: number;
}
export default function BasicTabs({ tabs, index }: BasicTabsProps) {
  const { palette } = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(index ?? 0);

  const handleChange = (event: React.SyntheticEvent, newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  return (
    <Box
      sx={{
        width: '100%',
        '.MuiTabs-indicator': {
          backgroundColor: 'rgba(0,0,0,0) !important',
          height: '4px',
          display: 'flex',
          justifyContent: 'center',
        },
        '.MuiButtonBase-root': {
          color: palette.neutral[0],
        },
        '.MuiButtonBase-root.Mui-selected': {
          color: palette.primary.main,
        },
        '.MuiTabs-indicator::before': {
          content: '""',
          backgroundColor: palette.primary.main,
          display: 'block',
          height: '100%',
          width: '30px',
          borderRadius: '2px',
        },
      }}
    >
      <Tabs value={currentIndex} onChange={handleChange} aria-label="tabs">
        {tabs.map((tab) => (
          <Tab key={tab.label} label={tab.label} />
        ))}
      </Tabs>
      <CustomTabPanel key={currentIndex} currentIndex={currentIndex} index={currentIndex}>
        {tabs[currentIndex].panel}
      </CustomTabPanel>
    </Box>
  );
}
