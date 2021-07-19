import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appSettingsReducer  from './reducers/appSettings'

export const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
