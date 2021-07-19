import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface appSettings {
  theme: 'light' | 'dark'
}

const initialState: appSettings = {
  theme: 'light'
}

export const appSettings = createSlice({
  name: 'appSettings',
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === 'light') {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
    }
  }
})

export const appTheme = (state: RootState) => state.appSettings.theme;

export const {changeTheme} = appSettings.actions

export default appSettings.reducer
