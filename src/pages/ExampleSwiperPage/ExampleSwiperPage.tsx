import { Container, Box } from '@mui/material';
import UiSwiper from '@src/ui-components/UiSwiper';
import Hero01 from '@src/assets/images/heros/hero_01.jpg';
import Hero02 from '@src/assets/images/heros/hero_02.jpg';
import Hero03 from '@src/assets/images/heros/hero_03.jpg';
import Hero04 from '@src/assets/images/heros/hero_04.jpg';
import Hero05 from '@src/assets/images/heros/hero_05.jpg';
import Hero06 from '@src/assets/images/heros/hero_06.jpg';
import Hero07 from '@src/assets/images/heros/hero_07.jpg';
import Hero08 from '@src/assets/images/heros/hero_08.jpg';
import Hero09 from '@src/assets/images/heros/hero_09.jpg';

interface IHerosList {
  src: string;
  name: string;
}
const herosList: IHerosList[] = [
  {
    src: Hero01,
    name: 'hero_01',
  },
  {
    src: Hero02,
    name: 'hero_02',
  },
  {
    src: Hero03,
    name: 'hero_03',
  },
  {
    src: Hero04,
    name: 'hero_04',
  },
  {
    src: Hero05,
    name: 'hero_05',
  },
  {
    src: Hero06,
    name: 'hero_06',
  },
  {
    src: Hero07,
    name: 'hero_07',
  },
  {
    src: Hero08,
    name: 'hero_08',
  },
  {
    src: Hero09,
    name: 'hero_09',
  },
];

const ExamplePage = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box width={'100vw'} height={'100vh'} marginBottom={'32px'}>
        <UiSwiper items={herosList} />
      </Box>
      <Box width={773} height={457} borderRadius={'20px 0px 0px 20px'} overflow={'hidden'}>
        <UiSwiper items={herosList} navigation={true} />
      </Box>
    </Container>
  );
};

export default ExamplePage;
