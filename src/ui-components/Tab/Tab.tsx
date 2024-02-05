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

interface BasicTabsProps {
  labels: string[];
  panels: ReactNode[];
}
export default function BasicTabs({ labels, panels }: BasicTabsProps) {
  const { palette } = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState(0);

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
        {labels.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
      {panels.map((panel, index) => (
        <CustomTabPanel key={index} currentIndex={currentIndex} index={index}>
          {panel}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
