import {
  Box,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Logo from '@src/assets/logo.svg?react';
import { FaLine, FaInstagram } from 'react-icons/fa6';

const Copyright = () => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));

  const variant = matches ? 'Body_16px_R' : 'Body2_14px_R';

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} spacing={2}>
      <Typography variant={variant} color={palette.neutral[0]}>
        806023 台灣高雄市新興區六角路123號
      </Typography>
      <Typography variant={variant} color={palette.neutral[0]}>
        © 享樂酒店 2023 All Rights Reserved.
      </Typography>
    </Stack>
  );
};

const SocialMedia = () => {
  const { palette } = useTheme();
  return (
    <Stack direction={'row'} gap={2}>
      <IconButton sx={{ border: '1px solid white' }}>
        <SvgIcon sx={{ color: palette.neutral[0] }}>
          <FaLine />
        </SvgIcon>
      </IconButton>
      <IconButton sx={{ border: '1px solid white' }}>
        <SvgIcon sx={{ color: palette.neutral[0] }}>
          <FaInstagram />
        </SvgIcon>
      </IconButton>
    </Stack>
  );
};

const InfoItem = ({ title, content }: { title: string; content: string }) => {
  const { palette, breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.up('sm'));

  const contentVariant = matches ? 'Body_16px_R' : 'Body2_14px_R';

  return (
    <Stack gap={1}>
      <Typography variant="Title_16px_B" color={palette.neutral[0]}>
        {title}
      </Typography>
      <Typography variant={contentVariant} color={palette.neutral[0]}>
        {content}
      </Typography>
    </Stack>
  );
};

const Info = () => {
  const { palette } = useTheme();
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} spacing={5}>
      <Stack justifyContent={'space-between'} spacing={5}>
        <Logo fill={palette.neutral[0]} />
        <SocialMedia />
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent={'space-between'}
        spacing={{ xs: 2, sm: 10 }}
      >
        <Stack spacing={{ xs: 2, sm: 5 }}>
          <InfoItem title={'TEL'} content={'+886-7-1234567'} />
          <InfoItem title={'FAX'} content={'+886-7-1234567'} />
        </Stack>
        <Stack spacing={{ xs: 2, sm: 5 }}>
          <InfoItem title={'MAIL'} content={'elh@hexschool.com'} />
          <InfoItem title={'WEB'} content={'www.elhhexschool.com.tw'} />
        </Stack>
      </Stack>
    </Stack>
  );
};

const Footer = () => {
  const { palette } = useTheme();
  return (
    <Box sx={{ bgcolor: palette.neutral.bgcolor, pt: 10, pb: 15 }} component="footer">
      <Container maxWidth={'lg'}>
        <Stack spacing={10}>
          <Info />
          <Copyright />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
