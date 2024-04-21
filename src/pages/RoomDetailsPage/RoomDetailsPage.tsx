import { useParams } from 'react-router-dom';
import { Stack, Grid, useTheme, useMediaQuery } from '@mui/material';
import Navbar from '@src/common/Navbar';
import Footer from '@src/common/Footer';
import { fetchRoomsById } from '@src/apis/home';
import { useQuery } from '@tanstack/react-query';
import PageContainer from '@src/common/PageContainer';
import RoomDetailsPageHero from './components/RoomDetailsPageHero';
import RoomDetailsPageInfos from './components/RoomDetailsPageInfos';
import RoomDetailsPageCard from './components/RoomDetailsPageCard';

const RoomDetailsPage = () => {
  const { palette, breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  const { id } = useParams();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['roomDetails', id],
    queryFn: async () => await fetchRoomsById(id as string), // id!
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching room details</div>;
  if (!data) return null;
  console.log('data', data);
  const {
    imageUrl,
    imageUrlList,
    name,
    description,
    areaInfo,
    bedInfo,
    maxPeople,
    facilityInfo,
    amenityInfo,
    layoutInfo,
  } = data;

  return (
    <>
      <Navbar hasBackground />
      <Stack sx={{ marginTop: { md: '120px', xs: '72px' } }}>
        <main style={{ backgroundColor: palette.hotelPrimary[10] }}>
          <RoomDetailsPageHero imageUrl={imageUrl} imageUrlList={imageUrlList} />
          <PageContainer>
            <Grid
              container
              direction={isDesktop ? 'row' : 'column'}
              wrap={isDesktop ? 'nowrap' : 'wrap'}
              gap={isDesktop ? 9 : 0}
              p={isDesktop ? '120px 0' : '20px 12px'}
            >
              <RoomDetailsPageInfos
                name={name}
                description={description}
                areaInfo={areaInfo}
                bedInfo={bedInfo}
                maxPeople={maxPeople}
                layoutInfo={layoutInfo.filter((info) => info.isProvide)}
                facilityInfo={facilityInfo.filter((info) => info.isProvide)}
                amenityInfo={amenityInfo.filter((info) => info.isProvide)}
              />
              <RoomDetailsPageCard />
            </Grid>
          </PageContainer>
        </main>
      </Stack >
      <Footer />
    </>
  );
};

export default RoomDetailsPage;
