import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { AccountStepFormValues } from '../components/AccountStep';
import { ProfileStepFormValues } from '../components/ProfileStep';

interface RegisterFormSubmitData {
  email: string;
  password: string;
  validPassword: string;
  name: string;
  phone: string;
  isAgreePolicy: boolean;
  birthday: string;
  address: {
    zipcode: number;
    detail: string;
  };
}

interface RegisterFormState {
  submitData: RegisterFormSubmitData;
  setAccountData: (data: AccountStepFormValues)=> void;
  setProfileData: (data: ProfileStepFormValues)=> void;
}

export const useRegisterFormStore = create(
  immer<RegisterFormState>((set) => ({
    submitData: {
      email: '',
      password: '',
      validPassword: '',
      name: '',
      phone: '',
      isAgreePolicy: false,
      birthday: '1901/1/1',
      address: {
        zipcode: 100,
        detail: '',
      },
    },
    setAccountData: (data) =>
      set((state) => {
        state.submitData = { ...state.submitData, ...data };
      }),

    setProfileData: ({ name, phone, isAgreePolicy, birthday, detail, zipcode }) =>
      set((state) => {
        // form 跟 store 的資料格式有點差別，故須重新解構整理為 store 用的資料格式
        const newData = {
          name,
          phone,
          isAgreePolicy,
          birthday,
          address: { detail, zipcode },
        };
        state.submitData = { ...state.submitData, ...newData };
      }),
  }))
);
