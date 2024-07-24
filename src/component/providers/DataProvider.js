import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthProvider';
import { useErrors } from './ErrorProvider';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const { handleMethod } = useErrors();
    const { updateUser } = useAuth();
    const [requestedFields, setRequestedFields] = useState(new Set());

    const requestData = async (fields) => {
        const fieldsToFetch = fields.split(';').filter(field => !requestedFields.has(field)).join(';');
        if (!fieldsToFetch) return;

        handleMethod(async () => {
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/fetchData?fields=${fieldsToFetch}`);
            updateUser(response.data.data);
            setRequestedFields(prevFields => new Set([...prevFields, ...fields.split(';')]));
        });
    };

    return (
        <DataContext.Provider value={{ requestData }}>
            {children}
        </DataContext.Provider>
    );
};
