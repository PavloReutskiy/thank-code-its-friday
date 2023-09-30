import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DeviceState {
  isMobile: boolean;
}

const initialState: DeviceState = {
  isMobile: false,
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = deviceSlice.actions;
export const selectIsMobile = (state: RootState): boolean => state.device.isMobile;

export default deviceSlice.reducer;

// Удалить, если нигде не понадобится или использовать такую проверку

// useLayoutEffect(() => {
//   const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
//   dispatch(setIsMobile(isTouchDevice));
// }, [dispatch]);
