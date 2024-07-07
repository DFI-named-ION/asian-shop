import React, { useEffect, useState } from "react";
import axios from 'axios';
import { auth } from "./../../firebaseConfig";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(async (loadedUser) => {
            if (loadedUser) {
                // const token = await loadedUser.getIdToken();
                // axios.post(process.env.REACT_APP_WEB_API_BASE_URL + "/Auth/handleUserRoleCreation", { accessToken: token })
                // .then((response) => {
                //     if (response.data.message === "Success") {
                //         const role = response.data.data;
                //         setUser({ ...loadedUser, role: role });
                //         return;
                //     }
                //     handleError(response.data.message);
                // })
                // .catch((err) => {
                //     handleError(err);
                // });
                setUser(loadedUser); // BOOM!
            } else {
                setUser(null);
            }
            setPending(false);
        });
    });

    const handleError = (error) => {
        console.log(error);
        switch (error) {
            case "":
                break;
        };
    };

    return (
        <AuthContext.Provider value={{ user, setUser, pending }}>
            {children}
        </AuthContext.Provider>
    );
};
