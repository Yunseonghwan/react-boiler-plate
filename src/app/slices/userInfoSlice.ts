import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import storageService from 'common/services/storage.service';
import { STORAGE_KEYS } from 'constant/keys';

export interface UserInfoSliceInfoType {
  payload: boolean;
  accessToken: string;
  refreshToken: string;
  userId: number;
}

const initialState: UserInfoSliceInfoType = {
  payload: storageService.loadData(STORAGE_KEYS.userInfo)?.payload ?? false,
  accessToken: storageService.loadData(STORAGE_KEYS.userInfo)?.accessToken ?? '',
  refreshToken: storageService.loadData(STORAGE_KEYS.userInfo)?.refreshToken ?? '',
  userId: storageService.loadData(STORAGE_KEYS.userInfo)?.userId ?? -1,
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfoSliceInfoType>) => {
      const newWalletInfo = Object.assign(state, action.payload);
      storageService.saveData(STORAGE_KEYS.userInfo, newWalletInfo);
    },
    logout: state => {
      Object.assign(state, {
        payload: false,
        accessToken: '',
        refreshToken: '',
        userId: -1,
      });
      storageService.removeData(STORAGE_KEYS.userInfo);
    },
  },
});

export const { login, logout } = userInfoSlice.actions;

export default userInfoSlice.reducer;
