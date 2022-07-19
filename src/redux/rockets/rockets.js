/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';

const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';


const INITIAL_STATE = {
  loading: false,
  Rockets: [],
};

export const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const res = await fetch(rocketsAPI);
  return res.json();
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: INITIAL_STATE,
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {

      const rocketsArr = action.payload.map((item) => ({
        id:item.id,
        name : item.rocket_name,
        description : item.description,
        image : item.flickr_images[0],
      }));

      state.Rockets = rocketsArr;
      state.loading = false;
    },

    [fetchRockets.pending]: (state) => { 
      state.loading = true;
    },

    [fetchRockets.rejected]: (state) => { 
      state.loading = false;   
    },
  },
});

export default rocketsSlice.reducer;
