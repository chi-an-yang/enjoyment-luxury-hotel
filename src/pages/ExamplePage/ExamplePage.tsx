import { Container, Divider, Stack, Typography } from '@mui/material';
import MuiComponents from './components/MuiComponents';
import ReactQueryComponent from './components/ReactQueryComponent';
import SelectorComponents from './components/SelectorComponents';
import SwiperComponent from './components/SwiperComponent';
import Footer from '@src/common/Footer';
import HotelTypography from './components/HotelTypography';

const ExamplePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Stack gap={2}>
          <Typography variant="body1">這裡是範例</Typography>

          <Divider textAlign="center">Hotel Typography</Divider>
          <HotelTypography />

          <Divider textAlign="center">Mui component</Divider>
          <MuiComponents />

          <Divider textAlign="center">React Query</Divider>
          <ReactQueryComponent />

          <Divider textAlign="center">Swiper</Divider>
          <SwiperComponent />

          <Divider textAlign="center">Selector</Divider>
          <SelectorComponents />
          
        </Stack>
      </Container>
      <Divider textAlign="center">Footer</Divider>
      <Footer />
    </>
  );
};

export default ExamplePage;
