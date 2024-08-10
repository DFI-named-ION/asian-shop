import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    pending: true,
    error: null,
};

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/fetchData?fields=displayName;isVerified;email;`);
    return response.data.data;
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        updateUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.pending = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.user = action.payload;
                state.pending = false;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.pending = false;
                state.error = action.error.message;
            });
    },
});

export const { setUser, updateUser, clearUser } = userSlice.actions;

export default userSlice.reducer;