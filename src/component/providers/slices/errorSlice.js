import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    origin: "",
    code: "",
    short: "",
    long: "",
    tags: []
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError(state, action) {
            return { ...state, ...action.payload };
        },
        clearError(state) {
            return initialState;
        }
    }
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
