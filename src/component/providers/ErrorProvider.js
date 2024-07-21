import React, { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const useErrors = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
    
    const [catchedError, setCatchedError] = useState({origin: "", code: "", short: "", long: "", tags: []});

    const handleMethod = async (method) => {
        setCatchedError({origin: "", code: "", short: "", long: "", tags: []});
        try {
            await method();
        } catch (error) {
            if (error.response) {
                getErrorInfo(error.response.status, error);
            } else if (error.request) {
                getErrorInfo(error.code);
            } else {
                if (error?.code) {
                    getErrorInfo(error.code);
                } else {
                    getErrorInfo(error);
                }
            }
        }
    };
    
    const getErrorInfo = (error, object = null) => {
        let short = "";
        let long = "";
        let origin = "";
        let isForUser = false;
        let tags = [];

        switch (error) {
            case "ERR_NETWORK":
                short = "Network error";
                long = "Network error occured";
                origin = "axios";
                isForUser = true;
                tags.push("email-field");
                tags.push("code-field");
                break;
            case "auth/invalid-email":
                short = "Invalid email format";
                long = "Correct email look like this: user@example.com.";
                origin = "firebase";
                isForUser = true;
                tags.push("email-field");
                break;
            case "auth/invalid-credential":
                short = "Invalid credentials";
                long = "Invalid credentials to access this account.";
                origin = "firebase";
                isForUser = true;
                tags.push("email-field");
                tags.push("password-field");
                break;
            case "auth/too-many-requests":
                short = "Too much requests";
                long = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
                origin = "firebase";
                isForUser = true;
                tags.push("email-field");
                break;
            case "auth/popup-closed-by-user":
                short = "Popup was closed";
                long = "You accidantly closed popup. Try again.";
                origin = "firebase";
                isForUser = true;
                tags.push("email-field");
                break;
            case "auth/email-already-in-use":
                short = "Email is already taken";
                long = "Account with this email already exists.";
                origin = "firebase";
                isForUser = true;
                tags.push("email-field");
                break;
            case "User not found":
                short = "User not found";
                long = "User with provided email is not found.";
                origin = "api";
                isForUser = true;
                tags.push("email-field");
                break;
            case "User is already verified":
                short = "User is already verified";
                long = "User is already verified.";
                origin = "api";
                isForUser = true;
                tags.push("code-field");
                break;
            case "Session Id is null":
                short = "You are not logged in";
                long = "You cannot preform this action, because are not logged in.";
                origin = "api";
                break;
            case "Code is not valid":
                    short = "Code is not valid";
                    long = "Code is not valid.";
                    origin = "api";
                    isForUser = true;
                    tags.push("code-field");
                break;
            case "Failed to get user with email":
                //?????
                break;
            case 400:
                return getErrorInfo(object.response.data);
            case 401:
                short = "Unauthorized error";
                long = "Unauthorized error occured";
                origin = "api";
                break;
            case "jwt-decrypt-error":
                short = "Url is not valid";
                long = "Url is no longer valid.";
                origin = "custom";
                isForUser = true;
                tags.push("password-field");
                break;
            case "jwt-encrypt-error":
                short = "Internal error";
                long = "Internal error occured.";
                origin = "custom";
                isForUser = true;
                tags.push("password-field");
                break;
            case "email-format-error":
                short = "Invalid email format";
                long = "Correct email look like this: user@example.com.";
                origin = "custom";
                isForUser = true;
                tags.push("email-field");
                break;
            case "password-format-error":
                short = "Invalid password format";
                long = "password-format-error"; // modal will display stylish html
                origin = "custom";
                isForUser = true;
                tags.push("password-field");
                break;
            case "not-full-code":
                short = "Code is not full";
                long = "Code is not full.";
                origin = "custom";
                isForUser = true;
                tags.push("code-field");
                break;
            case "recaptcha-error":
                short = "Captcha is not complete";
                long = "Captcha verification is not complete."
                origin = "custom";
                isForUser = true;
                tags.push("email-field");
                break;
            default:
                short = "Unexpected error";
                long = "You encountered unexpected error.";
                origin = "hz";
                isForUser = true;
                tags.push("email-field");
                tags.push("password-field");
                break;
        };
        setCatchedError({ origin, code: error, short, long, isForUser, tags})
    };

    return (
        <ErrorContext.Provider value={{ catchedError, handleMethod, setCatchedError }}>
            {children}
        </ErrorContext.Provider>
    );
};
