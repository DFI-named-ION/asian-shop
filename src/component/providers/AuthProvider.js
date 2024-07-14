import React, { useEffect, useState } from "react";
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);
    const [axiosError, setAxiosError] = useState({short: "", long: ""});

    const fetchUserData = async (fields) => {
        setPending(true);
        try {
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/fetchData?fields=${fields}`);
            setUser(response.data.data);
        } catch (err) {
            if (err.response && err.response.data && err.response.data === "Session Id is null") {
                setUser(null);
            } else {
                handleError(err);
            }
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        fetchUserData("displayName;isVerified;email;");
    }, []);

    const login = async (token) => {
        setPending(true);
        try {
            setAxiosError({short: "", long: ""});
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/login`, { accessToken: token });
            await fetchUserData("displayName;isVerified;email;");
        } catch (err) {
            handleError(err);
        }
        finally {
            setPending(false);
        }
    };

    const logout = async () => {
        setPending(true);
        try {
            setAxiosError({short: "", long: ""});
            await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/logout`);
            setUser(null);
        } catch (err) {
            handleError(err);
        } finally {
            setPending(false);
        }
    };

    const requestData = async (fields) => {
        try {
            setAxiosError({short: "", long: ""});
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/fetchData?fields=${fields}`);
            setUser(prevUser => ({ ...prevUser, ...response.data.data }));
        } catch (err) {
            handleError(err);
        }
    };

    const handleError = (error) => {
        // if (error.response) {
        //     setAxiosError({short: "Server error", long: "Internal server error occurred. Please try again later."});
        // } else if (error.request) {
        //     // setAxiosError({short: "Network error", long: "Network error. Please check your internet connection."});
        // } else {
        //     setAxiosError({short: "Unexpected error", long: "An unexpected error occurred. Please try again."});
        // }
    };

    return (
        <AuthContext.Provider value={{ user, pending, login, logout, requestData, axiosError }}>
            {pending ? <div className="text-center m-5 h-100">Loading...</div> : children}
        </AuthContext.Provider>
    );
};
