import React, { createContext, useEffect, useState, useContext } from 'react';
import { CookieContext } from './CookieProvider';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { getCookie, setCookie } = useContext(CookieContext);
    const [user, setUser] = useState(() => {
        const cookieUser = getCookie('cookieUser');
        return cookieUser ? JSON.parse(cookieUser) : null;
    });

    useEffect(() => {
        if (user) {
            setCookie('cookieUser', user, 1/24);
        } else {
            setCookie('cookieUser', {}, -1);
        }
    }, [user, setCookie]);

    const logAndSetUser = (newUser) => {
        //console.log("setUser called");
        setUser(newUser);
    };

    return (
        <UserContext.Provider value={{ user, setUser: logAndSetUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };