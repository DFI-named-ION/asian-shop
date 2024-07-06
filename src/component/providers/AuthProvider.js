import React, { useEffect, useState } from "react";
import axios from 'axios';
import { auth } from "./../../firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (loadedUser) => {
            if (loadedUser && !loadedUser?.role) {
                const token = await loadedUser.getIdToken();
                try {
                    const response = await axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/handleUserRoleCreation", {
                        accessToken: token,
                    });
                    if (response.data.message === "Success") {
                        const role = response.data.data;
                        setUser({ ...loadedUser, role: role });
                    } else {
                        // Handle error response
                    }
                } catch (error) {
                    // Handle axios error
                }
            } else {
                setUser(null);
            }
            setPending(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, pending }}>
            {children}
        </AuthContext.Provider>
    );
};
