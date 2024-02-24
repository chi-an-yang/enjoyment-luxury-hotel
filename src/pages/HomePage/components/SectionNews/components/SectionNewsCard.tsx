import { Stack, Grid, Box, Typography, useTheme } from '@mui/material';

type SectionNewsCardProps = {
  img: string;
  imgDescription: string;
  title: string;
  detail: string;
};

const SectionNewsCard = ({ img, imgDescription, title, detail }: SectionNewsCardProps) => {
  const { palette } = useTheme();
  return (
    <Stack display={'flex'} direction={'row'} spacing={3} alignItems={'center'}>
      <Box
        width="100%"
        maxWidth="474px"
        height="auto"
        maxHeight="294px"
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

export default SectionNewsCard;
