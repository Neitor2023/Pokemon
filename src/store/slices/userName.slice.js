import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: 'Romy',
    reducers: {
        setNewValue: (state, action) => {
            return action.payload;
        }
    }
})

export const { setNewValue } = userNameSlice.actions;
export default userNameSlice.reducer;