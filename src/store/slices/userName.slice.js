import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: 'Romy',
    reducers: {
        getTrainerName: (state, action) => {
            const name = action.payload;
            // console.log("trainerSlice")
            return name
        }
    }
})

export const { getTrainerName } = userNameSlice.actions;
export default userNameSlice.reducer;