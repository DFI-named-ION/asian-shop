import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import dataReducer from './slices/additionalSlice';
import { thunk } from 'redux-thunk';

const store = configureStore({
    reducer: {
        user: userReducer,
        data: dataReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
