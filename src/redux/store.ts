import { configureStore } from '@reduxjs/toolkit';
import deviceReducer from './features/device/deviceSlice';
import languageReducer from './features/language/languageSlice';

const store = configureStore({
  reducer: {
    device: deviceReducer,
    language: languageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
