import { Box, Stack, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// 酒店後端 api https://ts-freyja-api.onrender.com/swagger/#/
// const getNews = async () =>
//   axios
//     .get('/api/v1/home/news/', { baseURL: 'https://ts-freyja-api.onrender.com/' })
//     .then((res) => res.data);

// 測試打 api https://jsonplaceholder.typicode.com/
const getTodo = async () =>
  axios.get('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.data);

const ReactQueryComponent = () => {
  const { data } = useQuery({
    queryKey: ['data'],
    queryFn: getTodo,
  });

  return (
    <Stack>
      <Typography variant="body1">使用 useQuery 把回應資料渲染到畫面</Typography>
      <Box component={'p'}>{JSON.stringify(data)}</Box>
    </Stack>
  );
};

export default ReactQueryComponent;
