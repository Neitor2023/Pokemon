import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const couterSlice = createSlice({
    name: 'couter',
    initialState: 0,
    reducers: {

    }
})

export const { } = couterSlice.actions;

export default couterSlice.reducer;