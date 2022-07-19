/* eslint-disable */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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




























// /* eslint-disable */
// import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

// const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';


// const INITIAL_STATE = {
//   loading: false,
//   Rockets: [],
// };

// export const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
//   const res = await fetch(rocketsAPI);
//   return res.json();
// });

// const rocketsSlice = createSlice({
//   name: 'rockets',
//   initialState: INITIAL_STATE,
//   reducers: {
//     handleRocketReservation: (state, action) => {
//       const { id, type } = action.payload;
//       const newReservetion = current(state).Rockets.map((rocket) => {
//         if(type === 'join' && id === rocket.id) {
//           return { ...rocket, reserved: true };
//         }
//         if(type === 'leave' && id === rocket.id) {
//           return { ...rocket, reserved: false };
//         }
//         return rocket;
//       });
//       state.Rockets = newReservetion;
//     }
//   },
//   extraReducers: {
//     [fetchRockets.fulfilled]: (state, action) => {

//       const rocketsArr = action.payload.map((item) => ({
//         id:item.id,
//         name : item.rocket_name,
//         description : item.description,
//         image : item.flickr_images[0],
//         reserved: false,
//       }));

//       state.Rockets = rocketsArr;
//       state.loading = false;
//     },

//     [fetchRockets.pending]: (state) => { 
//       state.loading = true;
//     },

//     [fetchRockets.rejected]: (state) => { 
//       state.loading = false;   
//     },
//   },
// });

// export const { handleRocketReservation } = rocketsSlice.actions;

// export default rocketsSlice.reducer;
