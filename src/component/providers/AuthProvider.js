import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, setUser, clearUser } from './slices/userSlice';
import axios from "axios";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { JwtContext } from "./JwtProvider";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { user, pending } = useSelector((state) => state.user);
    const { encryptJwtToken } = useContext(JwtContext);

    const updateUser = (data) => {
        dispatch(setUser(data));
    };

    const login = async (accessToken, name = "") => {
        let token = await encryptJwtToken({accessToken, name});
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/login`, { token });
        dispatch(fetchUserData());
    };

    const loginWithEmailAndPassword = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        await login(await result.user.getIdToken());
    };

    const loginWithPopup = async (provider) => {
        const result = await signInWithPopup(auth, provider);
        await login(await result.user.getIdToken());
    };

    const registerWithEmailAndPassword = async (email, password, name) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await login(await result.user.getIdToken(), name);
    };

    const registerSeller = async (email, password, name, companyName) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        let accessToken = await result.user.getIdToken();
        let token = await encryptJwtToken({accessToken, name, companyName});
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/registerSeller`, { token });
    };

    const loginSeller = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        let accessToken = await result.user.getIdToken();
        let token = await encryptJwtToken({accessToken});
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/loginSeller`, { token });
    };

    const logout = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/logout`);
        } catch (err) {
            throw err;
        } finally {
            dispatch(clearUser());
        }
    };

    const updatePassword = async (oldPassword, newPassword, newPasswordRepeat) => {
        await signInWithEmailAndPassword(auth, user.email, oldPassword);
        let token = await encryptJwtToken({newPassword, newPasswordRepeat});
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/updatePassword`, {token});
    };

    const updateEmail = async (email) => {
        let token = await encryptJwtToken({email});
        await axios.post(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/updateEmail`, {token});
    };

    const removeUser = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_WEB_API_BASE_URL}/Auth/removeUser`);
        } catch (err) {
            throw err;
        } finally {
            dispatch(clearUser());
        }
    };

    return (
        <AuthContext.Provider value={{ user, pending, removeUser, loginWithEmailAndPassword, loginWithPopup, registerWithEmailAndPassword, logout, updateUser, updatePassword, updateEmail, registerSeller, loginSeller }}>
            {children}
        </AuthContext.Provider>
    );
};
