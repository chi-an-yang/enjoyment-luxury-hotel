// const HomePage = () => {
//   return <></>;
// };

// export default HomePage;

// 官網的範例頁面，可以從這個佈局開始改
// [DEMO](https://mui.com/material-ui/getting-started/templates/album/)
// [Source code](https://github.com/mui/material-ui/blob/v5.15.3/docs/data/material/getting-started/templates/album/Album.tsx)

// import AppBar from '@mui/material/AppBar';
// import { MdCameraAlt } from 'react-icons/md';
// import Toolbar from '@mui/material/Toolbar';
// import { SvgIcon } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '@src/common/Navbar';
import SectionHero from './components/SectionHero';
import Footer from '@src/common/Footer';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage() {
  return (
    <>
      <main>
        <Navbar />
        <SectionHero />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </>
  );
}
