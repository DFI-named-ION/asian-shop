import React, { useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    const fetchUserData = async (fields) => {
        setPending(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/requestData?fields=${fields}`);
            setUser(response.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchUserData("fullName;isVerified;email;");
    }, []);

    const login = async (token) => {
        setPending(true);
        try {
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/login`, { accessToken: token });
            await fetchUserData("fullName;isVerified;email;");
        } catch (err) {
            console.error(err);
            setPending(false);
        }
    };

    const logout = async () => {
        setPending(true);
        try {
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/logout`);
            setUser(null);
        } catch (err) {
            console.error(err);
        } finally {
            setPending(false);
        }
    };

    const requestData = async (fields) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/requestData?fields=${fields}`);
            setUser(prevUser => ({ ...prevUser, ...response.data.data }));
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

    return (
        <AuthContext.Provider value={{ user, pending, login, logout, requestData }}>
            {pending ? <div className="text-center m-5 h-100">Loading...</div> : children}
        </AuthContext.Provider>
    );
};
