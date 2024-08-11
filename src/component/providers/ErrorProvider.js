import React, { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const useErrors = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
    const [catchedError, setCatchedError] = useState({ origin: "", code: "", short: "", long: "", tags: [] });

    const handleMethod = async (method) => {
        setCatchedError({ origin: "", code: "", short: "", long: "", tags: [] });
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

        console.log(error); // debug

        switch (error) {
            case "ERR_NETWORK":
                short = "Server is currently offline";
                long = "Server is currently offline, sorry but you wont be able to do this action.";
                origin = "axios";
                isForUser = true;
                tags.push("general");
                tags.push("server");
                tags.push("critical");
                break;
            case "auth/invalid-email":
                short = "Invalid email format";
                long = "Correct email look like this: user@example.com.";
                origin = "firebase";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("server");
                break;
            case "auth/invalid-credential":
                short = "Invalid credentials";
                long = "Invalid credentials to access this account.";
                origin = "firebase";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("password-field");
                tags.push("server");
                break;
            case "auth/too-many-requests":
                short = "Too much requests";
                long = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
                origin = "firebase";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("server");
                break;
            case "auth/popup-closed-by-user":
                short = "Popup was closed";
                long = "You accidantly closed popup. Try again.";
                origin = "firebase";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("server");
                break;
            case "auth/email-already-in-use":
                short = "Email is already taken";
                long = "Account with this email already exists.";
                origin = "firebase";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("server");
                break;
            case "Session not found":
            case "Session is not valid":
            case "Session Id is null":
            case "user-not-authenticated-error":
                short = "You are not logged in";
                long = "You cannot preform this action, because are not logged in.";
                origin = "api";
                isForUser = true;
                tags.push("critical");
                tags.push("general");
                break;
            case "user-not-found-error":
            case "User not found":
                short = "User not found";
                long = "User with provided email is not found.";
                origin = "api";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("server");
                break;
            case "server-offline-error":
                short = "Server is currently offline";
                long = "Server is currently offline, sorry but you wont be able to do this action.";
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                tags.push("code-field");
                break;
            case "unauthorized":
                short = "Unauthrorized access!";
                long = "You dont have permission to do this action.";
                origin = "custom";
                isForUser = true;
                tags.push("critical");
                break;
            case "product-not-found":
                short = "Product was not found";
                long = "Product was not found, double check article number.";
                origin = "api";
                isForUser = true;
                tags.push("catalog");
                break;
            case "add-product-error":
                short = "Product was not added due error";
                long = "Product was not added due error.";
                origin = "api";
                isForUser = true;
                tags.push("overlay");
                break;
            case "User is already verified":
                short = "User is already verified";
                long = "User is already verified.";
                origin = "api";
                isForUser = true;
                tags.push("with-button");
                tags.push("code-field");
                tags.push("server");
                break;
            case "Code is not valid":
                short = "Code is not valid";
                long = "Code is not valid.";
                origin = "api";
                isForUser = true;
                tags.push("with-button");
                tags.push("code-field");
                break;
            case 400:
                return getErrorInfo(object.response.data);
            case 401:
                short = "Unauthorized error";
                long = "Unauthorized error occured";
                origin = "api";
                break;
            case "not-seller-error":
                short = "User is not seller";
                long = "User with this email is not seller.";
                origin = "api";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                break;
            case "jwt-decrypt-error":
                short = "Url is not valid";
                long = "Url is no longer valid.";
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("password-field");
                break;
            case "jwt-encrypt-error":
                short = "Internal error";
                long = "Internal error occured.";
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("password-field");
                break;
            case "email-format-error":
                short = "Invalid email format";
                long = "Correct email look like this: user@example.com.";
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                break;
            case "password-format-error":
                short = "Invalid password format";
                long = "password-format-error"; // modal will display stylish html
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("password-field");
                tags.push("profile-page");
                break;
            case "password-format-error-overlay":
                short = "Invalid password format";
                long = "Invalid password format";
                origin = "custom";
                isForUser = true;
                tags.push("password-field");
                tags.push("overlay");
                tags.push("profile-page");
                break;
            case "phone-format-error":
                short = "Invalid phone format";
                long = "Correct phone is 10 digits long without country code: xxx xxx xx xx.";
                origin = "custom";
                isForUser = true;
                tags.push("phone-field");
                tags.push("profile-page");
                tags.push("overlay");
                break;
            case "address-format-error":
                short = "Invalid address format";
                long = "Fields 'City', 'Street' and 'House' are required while 'Apartment' is not.";
                origin = "custom";
                isForUser = true;
                tags.push("address-field");
                tags.push("profile-page");
                tags.push("overlay");
                break;
            case "recipient-format-error":
                short = "Invalid recipient format";
                long = "It is necessary to fill all previous recipient`s fields to be able to add another recipient.";
                origin = "custom";
                isForUser = true;
                tags.push("recipient-field");
                tags.push("profile-page");
                tags.push("overlay");
                break;
            case "not-full-code":
                short = "Code is not full";
                long = "Code is not full.";
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("code-field");
                break;
            case "not-same-error":
                short = "Passwords are not same";
                long = "Passwords are not same.";
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("password-field");
                break;
            case "recaptcha-error":
                short = "Captcha is not complete";
                long = "Captcha verification is not complete."
                origin = "custom";
                isForUser = true;
                tags.push("with-button");
                tags.push("email-field");
                break;
            case "image-format-error":
                short = "Image extention is not valid";
                long = "The extention of selected file is not allowed, please use one of these: .JPG, .PNG, .GIF, .WEBP."
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "image-size-error":
                short = "Image size is not valid";
                long = "The size of selected file is larger then allowed, max image size is 10MB."
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "image-upload-error":
                short = "Image was not uploaded due error";
                long = "Image was not uploaded due error."
                origin = "api";
                isForUser = true;
                tags.push("overlay");
                break;
            case "image-remove-error":
                short = "Image was not removed due error";
                long = "Image was not removed due error."
                origin = "api";
                isForUser = true;
                tags.push("overlay");
                break;
            case "title-format-error":
                short = "Title cannot be empty";
                long = "The product title cannot be left empty. Please provide a valid title.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "price-format-error":
                short = "Price must be a positive number with up to two decimal places";
                long = "The price must be a positive number, without leading zeros or symbols, and must have at most two decimal places. The minimum allowed value is 0.01.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "article-format-error":
                short = "Article number must be exactly 6 digits";
                long = "The article number must be exactly 6 digits long and cannot consist entirely of zeros. Please provide a valid article number.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "category-format-error":
                short = "Product category must be selected";
                long = "Please select a valid product category. The product category is required and cannot be left unselected.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "subcategory-format-error":
                short = "Product subcategory must be selected";
                long = "Please select a valid product subcategory. The product subcategory is required and cannot be left unselected.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "photos-format-error":
                short = "At least one product photo is required";
                long = "You must provide at least one photo of the product. Please upload a valid image.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "height-format-error":
                short = "Height must be a positive number with up to two decimal places";
                long = "The height must be a positive number, greater than or equal to 0.01, with up to two decimal places. Cyrillic letters are allowed in the unit.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "width-format-error":
                short = "Width must be a positive number with up to two decimal places";
                long = "The width must be a positive number, greater than or equal to 0.01, with up to two decimal places. Cyrillic letters are allowed in the unit.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "length-format-error":
                short = "Length must be a positive number with up to two decimal places";
                long = "The length must be a positive number, greater than or equal to 0.01, with up to two decimal places. Cyrillic letters are allowed in the unit.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            case "weight-format-error":
                short = "Weight must be a positive number with up to two decimal places";
                long = "The weight must be a positive number, greater than or equal to 0.01, with up to two decimal places. Cyrillic letters are allowed in the unit.";
                origin = "custom";
                isForUser = true;
                tags.push("overlay");
                break;
            default:
                short = "Unexpected error";
                long = "You encountered unexpected error.";
                origin = "hz";
                isForUser = true;
                tags.push("with-button");
                tags.push("code-field");
                tags.push("email-field");
                tags.push("password-field");
                tags.push("profile-page");
                tags.push("critical");
                tags.push("general");
                break;
        };
        setCatchedError({ origin, code: error, short, long, isForUser, tags });
    };

    return (
        <ErrorContext.Provider value={{ catchedError, handleMethod, setCatchedError }}>
            {children}
        </ErrorContext.Provider>
    );
};
