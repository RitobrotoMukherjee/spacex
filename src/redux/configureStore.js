import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rockets';
import missions from './missions/missions';

const store = configureStore({
  reducer: {
    rockets,
    missions,
  },
});

export default store;
