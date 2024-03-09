import axios from '../axios';

// GET /api/v1/rooms/
// {
//   "status": true,
//   "result": [
//     {
//       "_id": "65a4e27283315f6587b0cb44",
//       "name": "尊榮雙人房",
//       "description": "享受高級的住宿體驗，尊榮雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
//       "imageUrl": "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "imageUrlList": [
//         "https://images.unsplash.com/photo-1696986681606-b156ccd761c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1616046619793-7e4badf3fe1f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "https://images.unsplash.com/photo-1566813326586-741374c2caa7?q=80&w=1872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//       ],
//       "areaInfo": "24 坪",
//       "bedInfo": "1 張大床",
//       "maxPeople": 2,
//       "price": 10000,
//       "status": 1,
//       "facilityInfo": [
//         {
//           "title": "空調",
//           "isProvide": true
//         }...
//       ],
//       "amenityInfo": [
//         {
//           "title": "浴巾",
//           "isProvide": true
//         }...
//       ],
//       "createdAt": "2024-01-15T07:44:50.222Z",
//       "updatedAt": "2024-01-26T09:35:07.264Z",
//       "layoutInfo": [
//         {
//           "title": "市景",
//           "isProvide": false
//         }...
//       ]
//     }...
// }

export type RoomInfo = {
  title: string;
  isProvide: boolean;
};

export type Rooms = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[];
  areaInfo: string;
  bedInfo: string;
  maxPeople: number;
  price: number;
  status: number;
  facilityInfo: RoomInfo[];
  amenityInfo: RoomInfo[];
  createdAt: string;
  updatedAt: string;
  layoutInfo: RoomInfo[];
};

export type fetchRoomsListResponse = Rooms[];
export type fetchRoomsByIdResponse = Rooms;

export const fetchRoomsList = async (): Promise<fetchRoomsListResponse> => {
  const response = await axios.get('/api/v1/rooms/');
  return response.data.result;
};
export const fetchRoomsById = async (id: string): Promise<fetchRoomsByIdResponse> => {
  console.log('🚀 ~ fetchRoomsById ~ id:', id);
  const response = await axios.get(`/api/v1/rooms/${id}`);
  return response.data.result;
};
