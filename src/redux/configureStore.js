import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rockets';
import missions from './missions/missions';
import profile from './profile/profile';

const store = configureStore({
  reducer: {
    rockets,
    missions,
    profile,
  },
});

export default store;
