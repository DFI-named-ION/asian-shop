import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, setUser, clearUser } from './slices/userSlice';
import axios from "axios";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useErrors } from "./ErrorProvider";
import { JwtContext } from "./JwtProvider";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { user, pending } = useSelector((state) => state.user);
    const { handleMethod } = useErrors();
    const { encryptJwtToken } = useContext(JwtContext);

    const updateUser = (data) => {
        dispatch(setUser(data));
    };

    const login = async (accessToken, name = "") => {
        try {
            let token = await encryptJwtToken({accessToken, name});
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/login`, { token });
            dispatch(fetchUserData());
        } catch (error) {
            throw error;
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

    const registerWithEmailAndPassword = async (email, password, name) => {
        handleMethod(async () => {
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                await login(await result.user.getIdToken(), name);
            } catch (error) {
                throw error;
            }
        });
    };

    const registerSeller = async (email, password, name, companyName) => {
        handleMethod(async () => {
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                await register(await result.user.getIdToken(), name, companyName);
            } catch (error) {
                throw error;
            }
        });
    };

    const register = async (accessToken, name, companyName) => {
        try {
            let token = await encryptJwtToken({accessToken, name, companyName});
            await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/registerSeller`, { token });
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/logout`);
        dispatch(clearUser());
    };

    const updatePassword = async (oldPassword, newPassword, newPasswordRepeat) => {
        await signInWithEmailAndPassword(auth, user.email, oldPassword);
        let token = await encryptJwtToken({newPassword, newPasswordRepeat});
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/updatePassword`, {token});
    };

    return (
        <AuthContext.Provider value={{ user, pending, loginWithEmailAndPassword, loginWithPopup, registerWithEmailAndPassword, logout, updateUser, updatePassword, registerSeller }}>
            {children}
        </AuthContext.Provider>
    );
};
