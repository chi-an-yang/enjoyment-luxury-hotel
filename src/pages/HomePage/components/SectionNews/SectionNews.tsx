import { Grid, Stack, useTheme } from '@mui/material';
import HomePageContainer from '@src/common/HomePageContainer';
import SectionNewsTitle from './components/SectionNewsTitle';
import SectionNewsCard from './components/SectionNewsCard';
import DecoTop from './components/DecoTop';
import DecoBottom from './components/DecoBottom';
import NewsAutumn from '@src/assets/images/news/news_autumn.jpg';
import NewsChill1 from '@src/assets/images/news/news_chill.jpg';
import NewsChristmas from '@src/assets/images/news/news_christmas.jpg';

const news = [
  {
    img: NewsAutumn,
    imgDescription: 'autumn',
    title: '秋季旅遊，豪華享受方案',
    detail:
      '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。',
  },
  {
    img: NewsChill1,
    imgDescription: 'chill',
    title: '輕鬆住房專案',
    detail:
      '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。',
  },
  {
    img: NewsChristmas,
    imgDescription: 'christmas',
    title: '耶誕快樂，住房送禮',
    detail:
      '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！',
  },
];

const SectionNews = () => {
  const { palette } = useTheme();
  return (
    <Grid bgcolor={palette.hotelPrimary[10]} position={'relative'}>
      <DecoTop />
      <HomePageContainer
        sx={{
          display: 'flex',
          p: { xs: '80px 12px', md: '120px 0' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Stack mr={10}>
          <SectionNewsTitle />
        </Stack>
        <Stack sx={{ p: { xs: '40px 0', md: '0' } }} spacing={5}>
          {news.map((news) => SectionNewsCard(news))}
        </Stack>
      </HomePageContainer>
      <DecoBottom />
    </Grid>
  );
};

export default SectionNews;
