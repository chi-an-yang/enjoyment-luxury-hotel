import { Typography } from '@mui/material';

const HotelTypography = () => {
  return (
    <>
      <Typography variant="Display_100px_B" color={(theme) => theme.palette.neutral[100]}>
        Display_100px_B
      </Typography>
      <Typography variant="H1_48px_B">H1_48px_B</Typography>
      <Typography variant="H2_40px_B">H2_40px_B</Typography>
      <Typography variant="H3_32px_B">H3_32px_B</Typography>
      <Typography variant="H4_28px_B">H4_28px_B</Typography>
      <Typography variant="H5_24px_B">H5_24px_B</Typography>
      <Typography variant="H6_20px_B">H6_20px_B</Typography>
      <Typography variant="Title_16px_B">Title_16px_B</Typography>
      <Typography variant="Subtitle_14px_B">Subtitle_14px_B</Typography>
      <Typography variant="Body_16px_R">Body_16px_R</Typography>
      <Typography variant="Body2_14px_R">Body2_14px_R</Typography>
      <Typography variant="Tiny_12px_R">Tiny_12px_R</Typography>
    </>
  );
};

export default HotelTypography;
