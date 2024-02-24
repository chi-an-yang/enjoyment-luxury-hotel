import { Box, useTheme, useMediaQuery } from '@mui/material';
import Dot from '@src/assets/images/dot.png';

const DecoBottomDesktop = () => {
  return (
    <Box position={'absolute'} bottom={'-80px'} left={'200px'}>
      <img src={Dot} alt="deco" width="100%" height="100%" />
    </Box>
  );
};

const DecoBottomMobile = () => {
  return (
    <Box position={'absolute'} bottom={'-60px'} left={'24px'} width={'100px'} height={'100px'}>
      <img src={Dot} alt="deco" width="100%" height="100%" />
    </Box>
  );
};

const DecoBottom = () => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? <DecoBottomDesktop /> : <DecoBottomMobile />;
};

export default DecoBottom;
