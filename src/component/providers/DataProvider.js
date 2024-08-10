import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from './slices/userSlice';
import { useErrors } from './ErrorProvider';
import { JwtContext } from './JwtProvider';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const { handleMethod } = useErrors();
    const dispatch = useDispatch();
    const { encryptJwtToken } = useContext(JwtContext);

    const requestData = async (fields) => {
        return handleMethod(async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/fetchData?fields=${fields}`);
                dispatch(updateUser(response.data.data));
            } catch (err) {
                throw err;
            }
        });
    };

    const updateUserInfo = async (newUser) => {
        let token = await encryptJwtToken(newUser);
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/updateUser`, { token });
    };

    const uploadProductImage = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const result = await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/uploadProductImage`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return result;
    };

    const removeProductImage = async (file) => {
        const token = await encryptJwtToken({ file });
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/removeProductImage`, { token });
    };

    const addProduct = async (newProduct) => {
        const token = await encryptJwtToken(newProduct);
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/addProduct`, { token });
    };

    return (
        <DataContext.Provider value={{ requestData, updateUserInfo, uploadProductImage, removeProductImage, addProduct }}>
            {children}
        </DataContext.Provider>
    );
};
