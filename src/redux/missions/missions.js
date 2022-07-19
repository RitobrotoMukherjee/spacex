/* eslint-disable */
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const FETCH_MISSION_API = 'https://api.spacexdata.com/v3/missions';
const INITIAL_STATE = { missionList: [], loading: true };

export const fetchMissions = createAsyncThunk('spacex/missions/FETCH_MISSIONS', async () => {
  const response = await fetch(FETCH_MISSION_API);
  return response.json();
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: INITIAL_STATE,
  reducers: {
    handleReservation: (state, action) => {
      const { id, type } = action.payload;
      const newMissions = current(state).missionList.map((mission) => {
        if(type === 'join' && id === mission.mission_id) {
          return { ...mission, reserved: true };
        }
        if(type === 'leave' && id === mission.mission_id) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      state.missionList = newMissions;
    }
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => {
      const res = action.payload.map(({mission_id, mission_name, description}) => {
        return { mission_id, mission_name, description, reserved: false };
      });
      state.loading = false;
      state.missionList = res;
    },
    [fetchMissions.pending]: (state) => { state.loading = true },
    [fetchMissions.rejected]: (state) => { state.loading = false },
  }
});

export const { handleReservation }  = missionSlice.actions;

export default missionSlice.reducer;
