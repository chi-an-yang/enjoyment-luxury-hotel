import axios from '../axios';

// POST /api/v1/user/login
// {
//   "email": "timmothy.ramos@example.com",
//   "password": "Dirt5528295"
// }

// {
//   "status": true,
//   "token": "eyJhbGciOiJI....",
//   "result": {
//     "address": {
//       "zipcode": 802,
//       "detail": "文山路23號",
//       "county": "高雄市",
//       "city": "苓雅區"
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

export type LoginResponse = {
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

export const login = async (params: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const response = await axios.post('/api/v1/user/login', { params });

  return response.data;
};
