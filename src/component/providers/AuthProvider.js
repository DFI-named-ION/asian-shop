import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useErrors } from "./ErrorProvider";
import { JwtContext } from "./JwtProvider";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const { handleMethod } = useErrors();
    const { encryptJwtToken } = useContext(JwtContext);
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        handleMethod(fetchUserData);
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Data/fetchData?fields=displayName;isVerified;email;`);
            setUser(response.data.data);
        } catch (error) {
            setUser(null);
        } finally {
            setPending(false);
        }
    };

    const updateUser = (data) => {
        setUser((prevUser) => ({ ...prevUser, ...data }));
    };

    const login = async (token) => {
        try {
            setPending(true);
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/login`, { accessToken: token });
            await fetchUserData();
        } catch (error) {
            throw error;
        } finally {
            setPending(false);
        }
    };

    const loginWithEmailAndPassword = async (email, password) => {
        handleMethod(async () => {
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                await login(await result.user.getIdToken());
            } catch (error) {
                throw error;
            }
        });
    };

    const loginWithPopup = async (provider) => {
        handleMethod(async () => {
            try {
                const result = await signInWithPopup(auth, provider);
                await login(await result.user.getIdToken());
            } catch (error) {
                throw error;
            }
        });
    };

    const registerWithEmailAndPassword = async (email, password) => {
        handleMethod(async () => {
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                await login(await result.user.getIdToken());
            } catch (error) {
                throw error;
            }
        });
    };

    const logout = async () => {
        setPending(true);
        handleMethod(async () => {
            await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/logout`);
            setUser(null);
        });
        setPending(false);
    };

    const updatePassword = async (oldPassword, newPassword, newPasswordRepeat) => {
        handleMethod(async () => {
            await signInWithEmailAndPassword(auth, user.email, oldPassword);
            let token = await encryptJwtToken({newPassword, newPasswordRepeat});
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/updatePassword`, {token});
        });
    };

    return (
        <AuthContext.Provider value={{ user, pending, loginWithEmailAndPassword, loginWithPopup, registerWithEmailAndPassword, logout, updateUser, updatePassword }}>
            {children}
        </AuthContext.Provider>
    );
};
