import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    additional: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setAdditional: (state, action) => {
            state.additional = action.payload;
        },
        clearAdditional: (state) => {
            state.additional = null;
        },
    },
});

export const { setAdditional, clearAdditional } = dataSlice.actions;

export default dataSlice.reducer;
