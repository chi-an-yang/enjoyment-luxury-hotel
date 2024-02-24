import { Stack, Grid, Box, Typography, useTheme, useMediaQuery } from '@mui/material';

type SectionNewsCardProps = {
  img: string;
  imgDescription: string;
  title: string;
  detail: string;
};

const SectionNewsCardDesktop = ({ img, imgDescription, title, detail }: SectionNewsCardProps) => {
  const { palette } = useTheme();
  return (
    <Stack display={'flex'} direction={'row'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="474px"
        height="100%"
        maxHeight={'294px'}
        borderRadius={2}
        overflow={'hidden'}
        flex={'1 0 474px'}
      >
        <img src={img} alt={imgDescription} width="100%" height="100%" />
      </Box>
      <Grid
        display={'flex'}
        direction={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
      >
        <Typography variant="H3_32px_B" color={palette.neutral[100]} component={'h3'} mb={3}>
          {title}
        </Typography>
        <Typography variant="Body_16px_R" color={palette.neutral[80]}>
          {detail}
        </Typography>
      </Grid>
    </Stack>
  );
};

const SectionNewsCardMobile = ({ img, imgDescription, title, detail }: SectionNewsCardProps) => {
  const { palette } = useTheme();
  return (
    <Stack display={'flex'} direction={'column'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="351px"
        height="100%"
        maxHeight={'294px'}
        borderRadius={2}
        overflow={'hidden'}
        flex={'1 0 294px'}
      >
        <img src={img} alt={imgDescription} width="100%" height="100%" />
      </Box>
      <Grid
        display={'flex'}
        direction={'column'}
        alignItems={'flex-start'}
        justifyContent={'flex-start'}
        flex={'1 1 auto'}
      >
        <Typography variant="H4_28px_B" color={palette.neutral[100]} component={'h4'} mb={1}>
          {title}
        </Typography>
        <Typography variant="Body2_14px_R" color={palette.neutral[80]}>
          {detail}
        </Typography>
      </Grid>
    </Stack>
  );
};

const SectionNewsCard = (props: SectionNewsCardProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <SectionNewsCardDesktop {...props} /> : <SectionNewsCardMobile {...props} />;
};

export default SectionNewsCard;
