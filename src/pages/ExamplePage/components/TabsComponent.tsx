import { Stack, Typography, Card, CardContent, useTheme } from '@mui/material';
import CustomTabsComponent from '@src/ui-components/Tab';

const ExampleCard = ({ txt, isFlex1 = false }: { txt: string; isFlex1?: boolean }) => (
  <Card sx={isFlex1 ? { flex: 1 } : {}}>
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {txt}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {txt}範例
      </Typography>
    </CardContent>
  </Card>
);

const TabsComponent = () => {
  const { palette } = useTheme();

  const renderTabs = (description: string, index?: number) => {
    return (
      <>
        <Typography variant="body1">Tabs ({description})</Typography>
        <Stack direction="row" bgcolor={palette.neutral[100]} p={2}>
          <CustomTabsComponent
            index={index}
            tabs={[
              {
                label: '個人資料',
                panel: (
                  <Stack
                    direction={{
                      xs: 'column',
                      md: 'row',
                    }}
                    spacing={3}
                  >
                    <ExampleCard txt="修改帳號資料" />
                    <ExampleCard txt="基本資料" isFlex1 />
                  </Stack>
                ),
              },
              { label: '我的訂單', panel: <ExampleCard txt="我的訂單" isFlex1 /> },
            ]}
          />
        </Stack>
      </>
    );
  };

  return (
    <>
      {renderTabs('Default index')}
      {renderTabs('Designated Index', 1)}
    </>
  );
};

export default TabsComponent;
