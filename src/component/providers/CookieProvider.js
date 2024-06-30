import React, { createContext } from 'react';

const CookieContext = createContext();

const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

const setCookie = (name, object, days) => {
    let value = JSON.stringify(object);
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const CookieProvider = ({ children }) => {
    return (
        <CookieContext.Provider value={{ setCookie, getCookie }}>
            {children}
        </CookieContext.Provider>
    );
};

export { CookieContext };