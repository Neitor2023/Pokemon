import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: 'Romy',
    reducers: {
        getTrainerName: (state, action) => {
            const name = action.payload;
            // console.log("trainerSlice")
            return name
        }
    }
})

export const { getTrainerName } = trainerSlice.actions;
export default trainerSlice.reducer;