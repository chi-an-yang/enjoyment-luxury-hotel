import { Container, Divider, Stack, Typography } from '@mui/material';
import MuiComponents from './components/MuiComponents';
import ModalComponents from './components/ModalComponents';
import ReactQueryComponent from './components/ReactQueryComponent';
import SwiperComponent from './components/SwiperComponent';

const ExamplePage = () => {
  return (
    <Container maxWidth="lg">
      <Stack gap={2}>
        <Typography variant="body1">這裡是範例</Typography>
        <Divider textAlign="center">Mui component</Divider>
        <MuiComponents />
        <Divider textAlign="center">React Query</Divider>
        <ReactQueryComponent />
        <Divider textAlign="center">Swiper</Divider>
        <SwiperComponent />
        <Divider textAlign="center">Modal</Divider>
        <ModalComponents />
      </Stack>
    </Container>
  );
};

export default ExamplePage;
