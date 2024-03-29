import areaInfoImg from '@src/assets/images/areaInfo.png';
import bedInfoImg from '@src/assets/images/bedInfo.png';
import maxPeopleImg from '@src/assets/images/maxPeople.png';
import isProvideImg from '@src/assets/images/isProvide.png';

type imageProps = 'areaInfo' | 'bedInfo' | 'maxPeople' | 'isProvide';

const imageMap = {
  areaInfo: areaInfoImg,
  bedInfo: bedInfoImg,
  maxPeople: maxPeopleImg,
  isProvide: isProvideImg,
};

const RoomInfoBasicImage = ({ type }: { type: imageProps }) => {
  const myImageSrc = imageMap[type];
  return <img src={myImageSrc} alt={type} />;
};

export default RoomInfoBasicImage;
