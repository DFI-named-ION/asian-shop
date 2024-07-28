import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider';
import { useErrors } from './ErrorProvider';
import { JwtContext } from './JwtProvider';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const { handleMethod } = useErrors();
    const { updateUser } = useAuth();
    const { encryptJwtToken } = useContext(JwtContext);
    const [requestedFields, setRequestedFields] = useState(new Set());

    const requestData = async (fields) => {
        const fieldsToFetch = fields.split(';').filter(field => !requestedFields.has(field)).join(';');
        if (!fieldsToFetch) return;

        return handleMethod(async () => {
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/fetchData?fields=${fieldsToFetch}`);
            updateUser(response.data.data);
            setRequestedFields(prevFields => new Set([...prevFields, ...fields.split(';')]));
        });
    };

    const updateUserInfo = async (newUser) => {
        return handleMethod(async () => {
            let token = await encryptJwtToken(newUser);
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/updateUser`, {token});
        });
    };

    return (
        <DataContext.Provider value={{ requestData, updateUserInfo }}>
            {children}
        </DataContext.Provider>
    );
};
