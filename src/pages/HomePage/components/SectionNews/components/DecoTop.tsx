import { Box, useTheme, useMediaQuery } from '@mui/material';
import Dot from '@src/assets/images/dot.png';

const DecoTopDesktop = () => {
  return (
    <Box position={'absolute'} top={'100px'} right={'180px'}>
      <img src={Dot} alt="deco" width="100%" height="100%" />
    </Box>
  );
};

const DecoTopMobile = () => {
  return (
    <Box position={'absolute'} top={'40px'} right={'24px'} width={'100px'} height={'100px'}>
      <img src={Dot} alt="deco" width="100%" height="100%" />
    </Box>
  );
};

const DecoTop = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <DecoTopDesktop /> : <DecoTopMobile />;
};

export default DecoTop;
