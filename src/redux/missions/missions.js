/* eslint-disable */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const FETCH_BOOK_API = 'https://api.spacexdata.com/v3/missions';
const INITIAL_STATE = { missionList: [], loading: true };

export const fetchMissions = createAsyncThunk('spacex/missions/FETCH_MISSIONS', async () => {
  const response = await fetch(FETCH_BOOK_API);
  return response.json();
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      const res = action.payload.map(({mission_id, mission_name, description}) => {
        return {mission_id, mission_name, description};
      });
      state.loading = false;
      state.missionList = res;
    },
    [fetchMissions.pending]: (state) => { state.loading = true },
    [fetchMissions.rejected]: (state) => { state.loading = false },
  }
});

export default missionSlice.reducer;
