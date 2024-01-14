import { Box, useTheme } from '@mui/material';
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ItemsProps {
  src: string;
  name: string;
}

interface UiSwiperProps {
  items: ItemsProps[];
  navigation?: boolean;
}

const UiSwiper = ({ items, navigation = false }: UiSwiperProps) => {
  const { palette } = useTheme();
  const uiSwiperStyle = {
    '.swiper': {
      width: '100%',
      height: '100%',
    },
    '.swiper-pagination-bullet': {
      width: '32px',
      height: '4px',
      borderRadius: '100px',
      opacity: 1,
      backgroundColor: palette.hotelPrimary[40],
    },
    '.swiper-pagination-bullet-active': {
      width: '60px',
      height: '4px',
      borderRadius: '100px',
      backgroundColor: palette.hotelPrimary[100],
    },
    '.swiper-slide': {
      background: '#fff',
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
    '.swiper-button-prev': {
      width: '56px',
      height: '56px',
      padding: '8px',
      borderRadius: '100px',
      backgroundColor: '#FFF',
      '&:after': {
        display: 'none',
      },
      '&:before': {
        content: '""',
        width: '40px',
        height: '40px',
        backgroundImage: `url('/src/assets/icons/arrow_left.svg')`,
      },
    },
    '.swiper-button-next': {
      width: '56px',
      height: '56px',
      padding: '8px',
      borderRadius: '100px',
      backgroundColor: '#FFF',
      '&:after': {
        display: 'none',
      },
      '&:before': {
        content: '""',
        width: '40px',
        height: '40px',
        backgroundImage: `url('/src/assets/icons/arrow_right.svg')`,
      },
    },
  };
  return (
    <Box width={'100%'} height={'100%'} sx={uiSwiperStyle}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={navigation}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {items.map(({ src, name }) => (
          <SwiperSlide key={name}>
            <img src={src} alt={name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default UiSwiper;
