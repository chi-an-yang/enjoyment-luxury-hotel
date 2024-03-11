import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material';
import Navbar from '@src/common/Navbar';
import { fetchRoomsById } from '@src/apis/home';
import { useQuery } from '@tanstack/react-query';
import RoomDetailsPageHero from './components/RoomDetailsPageHero';

const RoomDetailsPage = () => {
  const { palette } = useTheme();
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
  const { imageUrl, imageUrlList } = data;

  return (
    <>
      <Navbar hasBackground />
      <Stack sx={{ marginTop: { md: '120px', xs: '72px' } }}>
        <main style={{ backgroundColor: palette.hotelPrimary[10] }}>
          <RoomDetailsPageHero imageUrl={imageUrl} imageUrlList={imageUrlList} />
        </main>
      </Stack>
    </>
  );
};

export default RoomDetailsPage;
