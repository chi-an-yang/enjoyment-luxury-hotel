import { Grid, Typography, Theme, Box, useTheme, useMediaQuery } from '@mui/material';

const SectionHeroTitle = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Grid
      container={isDesktop ? false : true}
      direction={isDesktop ? 'row' : 'column'}
      alignItems={isDesktop ? 'flex-start' : 'center'}
      flex={isDesktop ? '0 1 500px' : 'auto'}
      minWidth={isDesktop ? '290px' : 'auto'}
      sx={{
        width: isDesktop ? 'auto' : '100%',
        maxWidth: isDesktop ? 'none' : '100vw',
        color: (theme) => theme.palette.hotelPrimary[100],
      }}
    >
      <Typography
        variant={isDesktop ? 'H2_40px_B' : 'H4_28px_B'}
        component={isDesktop ? 'h2' : 'h4'}
        mb={1}
      >
        享樂酒店
      </Typography>
      <Typography
        variant={isDesktop ? 'H5_24px_B' : 'Title_16px_B'}
        component={isDesktop ? 'h5' : 'p'}
        mb={isDesktop ? 5 : '20px'}
      >
        Enjoyment Luxury Hotel
      </Typography>
      <Box
        width={isDesktop ? '100%' : '2px'}
        height={isDesktop ? '2px' : '84px'}
        borderRadius="2px"
        sx={{
          background: (theme: Theme) =>
            isDesktop
              ? `linear-gradient(90deg, ${theme.palette.hotelPrimary[100]}, ${theme.palette.neutral[0]})`
              : `linear-gradient(180deg, ${theme.palette.hotelPrimary[100]}, ${theme.palette.neutral[0]})`,
        }}
      />
    </Grid>
  );
};

export default SectionHeroTitle;
