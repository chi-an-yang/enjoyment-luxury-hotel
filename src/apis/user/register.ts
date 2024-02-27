import axios from '../axios';

// POST /api/v1/user/signup
// {
//   "name": "Lori Murphy",
//   "email": "lori.murphy@example.com",
//   "password": "密碼",
//   "phone": "(663) 742-3828",
//   "birthday": "1982/2/4",
//   "address": {
//     "zipcode": 802,
//     "detail": "文山路23號"
//   }
// }

// {
//   "status": true,
//   "token": "eyJhbGciOiJI....",
//   "result": {
//     "address": {
//       "zipcode": 802,
//       "detail": "文山路23號",
//       "city": "高雄市",
//       "county": "苓雅區"
//     },
//     "_id": "6533f0ef4cdf5b7f762747b0",
//     "name": "Lori Murphy",
//     "email": "timmothy.ramos@example.com",
//     "phone": "(663) 742-3828",
//     "birthday": "1982-02-03T16:00:00.000Z",
//     "createdAt": "2023-10-21T15:40:31.526Z",
//     "updatedAt": "2023-10-21T15:40:31.526Z",
//     "id": "6533f0ef4cdf5b7f762747b0"
//   }
// }

type Address = {
  zipcode: number;
  detail: string;
  county: string;
  city: string;
};

export type RegisterResponse = {
  result: {
    address: Address;
    _id: string;
    name: string;
    email: string;
    phone: string;
    birthday: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
  status: boolean;
  token: string;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  address: {
    zipcode: number;
    detail: string;
  };
};

export const register = async (params: RegisterPayload): Promise<RegisterResponse> => {
  const response = await axios.post('/api/v1/user/signup', params);

  return response.data;
};
