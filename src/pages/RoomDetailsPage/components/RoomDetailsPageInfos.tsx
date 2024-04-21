import { Stack, Typography, List, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import RoomProfile from '@src/pages/RoomPage/components/RoomProfile';
import RoomInfo from '@src/pages/RoomPage/components/RoomInfo';
import RoomTitle from '@src/pages/RoomPage/components/RoomTitle';
import { RoomInfo as RoomInfoType } from '@src/apis/home/rooms';

type RoomDetailsPageInfosProps = {
  name: string;
  description: string;
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  layoutInfo: RoomInfoType[];
  facilityInfo: RoomInfoType[];
  amenityInfo: RoomInfoType[];
};

const RoomDetailsPageInfos = ({
  name,
  description,
  areaInfo,
  bedInfo,
  maxPeople,
}: RoomDetailsPageInfosProps) => {
  const { breakpoints } = useTheme();
  const isDesktop = useMediaQuery(breakpoints.up('md'));
  return (
    <Stack width="100%">
      <Typography variant={isDesktop ? "H1_48px_B" : 'H3_32px_B'} component={'h1'} mb={2}>
        {name}
      </Typography>
      <Stack spacing={isDesktop ? 10 : 3}>
        <Typography variant={isDesktop ? "Body_16px_R" : 'Body2_14px_R'} component={'p'}>
          {description}
        </Typography>
        <RoomProfile areaInfo={areaInfo} bedInfo={bedInfo} maxPeople={maxPeople} />
        <RoomInfo title={'layoutInfo'} infos={['市景', '獨立衛浴', '客廳', '書房', '樓層電梯']} />
        <RoomInfo
          title={'facilityInfo'}
          infos={[
            '平面電視',
            '吹風機',
            '冰箱',
            '熱水壺',
            '檯燈',
            '衣櫃',
            '除濕機',
            '浴缸',
            '書桌',
            '音響',
          ]}
        />
        <RoomInfo
          title={'amenityInfo'}
          infos={[
            '衛生紙',
            '拖鞋',
            '沐浴用品',
            '清潔用品',
            '刮鬍刀',
            '吊衣架',
            '浴巾',
            '刷牙用品',
            '罐裝水',
            '梳子',
          ]}
        />
        <Stack>
          <RoomTitle title={'訂房須知'} />
          <List>
            <ListItemText primary="1. 入住時間為下午3點，退房時間為上午12點。" />
            <ListItemText primary="2. 如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。" />
            <ListItemText primary="3. 請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。" />
            <ListItemText primary="4. 若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。" />
            <ListItemText primary="5. 請愛惜我們的房間與公共空間，並保持整潔。" />
            <ListItemText primary="6. 如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。" />
            <ListItemText primary="7. 我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。" />
            <ListItemText primary="8. 請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。" />
            <ListItemText primary="9. 我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。" />
            <ListItemText primary="10. 為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。" />
          </List>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default RoomDetailsPageInfos;
