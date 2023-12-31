import { Stack, Box, Typography, Link } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

/**
 * 這個元件是從 swiper 官網的範例改寫的
 * infinite loop: https://swiperjs.com/demos#infinite-loop
 * 官方 react 範例: https://codesandbox.io/p/sandbox/vfz433?file=/src/App.jsx
 */
const SwiperComponent = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="body1">
        這個元件是從 swiper 官網的{' '}
        <Link href="https://swiperjs.com/demos#infinite-loop">infinite loop</Link> 的{' '}
        <Link href="https://codesandbox.io/p/sandbox/vfz433?file=/src/App.jsx">react 範例</Link>
        {' '}改寫的
      </Typography>
      <Box
        height={300}
        sx={{
          '.swiper': {
            width: '100%',
            height: '100%',
          },
          '.swiper-slide': {
            background: '#eee',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          '.swiper-slide img': {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </Box>
    </Stack>
  );
};

export default SwiperComponent;
