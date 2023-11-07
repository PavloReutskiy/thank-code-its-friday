import { RootState } from '@/redux/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import getInitialLanguage from '@/utils/getInitialLanguage';

interface LanguageState {
  currentLanguage: string;
}

const initialState: LanguageState = {
  currentLanguage: getInitialLanguage(),
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export const selectLanguage = (state: RootState): string => state.language.currentLanguage;

export default languageSlice.reducer;
