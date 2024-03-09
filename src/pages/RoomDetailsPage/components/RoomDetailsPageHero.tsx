import {
  Stack,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
  Button,
  Link,
} from '@mui/material';
import UiSwiper from '@src/ui-components/UiSwiper';
import { Link as RouterLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

type RoomDetailsPageHeroProps = {
  imageUrl: string;
  imageUrlList: string[];
};

const RoomDetailsPageHeroDesktop = ({ imageUrl, imageUrlList }: RoomDetailsPageHeroProps) => {
  const { palette } = useTheme();
  return (
    <Stack height={'760px'} p={'80px'} direction="row" gap={1} position={'relative'}>
      <ImageList sx={{ width: '100%', height: '600px', borderRadius: '20px 0 0 20px' }}>
        <ImageListItem cols={2} rows={2} sx={{ overflow: 'hidden' }}>
          <img src={imageUrl} alt={imageUrl} width={978} height={600} />
        </ImageListItem>
      </ImageList>
      <ImageList
        sx={{ maxWidth: 774, width: '100%', height: '600px', borderRadius: '0 20px  20px 0' }}
        gap={8}
      >
        {imageUrlList.map((item) => (
          <ImageListItem key={item} cols={1} rows={1}>
            <img
              srcSet={`${item}?w=383&h=296&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=383&h=296&fit=crop&auto=format`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Link component={RouterLink} to={'/rooms'}>
        <Button
          variant={'outlined'}
          sx={{
            width: 113,
            height: 56,
            backgroundColor: palette.neutral[0],
            position: 'absolute',
            right: 120,
            bottom: 100,
            zIndex: 2,
          }}
        >
          看更多
        </Button>
      </Link>
    </Stack>
  );
};
const RoomDetailsPageHeroMobile = ({ imageUrl, imageUrlList }: RoomDetailsPageHeroProps) => {
  const { palette } = useTheme();
  const getListObj = (url: string) => {
    return {
      src: url,
      name: uuidv4(),
    };
  };

  const roomList = () => {
    return [imageUrl, ...imageUrlList].map((url) => getListObj(url));
  };
  return (
    <Stack height={240} position={'relative'}>
      <UiSwiper
        items={roomList()}
        customStyle={{
          '.swiper-pagination': {
            justifyContent: 'flex-start',
            display: 'flex',
            padding: '16px 12px',
          },
        }}
      />
      <Link component={RouterLink} to={'/rooms'}>
        <Button
          variant={'outlined'}
          sx={{
            width: 113,
            height: 56,
            backgroundColor: palette.neutral[0],
            position: 'absolute',
            right: 12,
            bottom: 23,
            zIndex: 2,
          }}
        >
          看更多
        </Button>
      </Link>
    </Stack>
  );
};

const RoomDetailsPageHero = ({ imageUrl, imageUrlList }: RoomDetailsPageHeroProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return isDesktop ? (
    <RoomDetailsPageHeroDesktop imageUrl={imageUrl} imageUrlList={imageUrlList} />
  ) : (
    <RoomDetailsPageHeroMobile imageUrl={imageUrl} imageUrlList={imageUrlList} />
  );
};

export default RoomDetailsPageHero;
