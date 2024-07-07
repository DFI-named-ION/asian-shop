import React, { createContext } from "react";
import { jwtDecode } from "jwt-decode";
import CryptoJS from "crypto-js";
import { SignJWT, jwtVerify } from "jose";

export const JwtContext = createContext();

export const JwtProvider = ({ children }) => {
    const secretKey = process.env.REACT_APP_JWT_SECRET;

    const decryptString = (cipherText, key) => {
        try {
            const bytes = CryptoJS.enc.Base64.parse(cipherText);
            const iv = CryptoJS.lib.WordArray.create(bytes.words.slice(0, 4));
            const encryptedData = CryptoJS.lib.WordArray.create(bytes.words.slice(4));

            const decrypted = CryptoJS.AES.decrypt(
                { ciphertext: encryptedData },
                CryptoJS.enc.Utf8.parse(key),
                {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                }
            );
            return decrypted.toString(CryptoJS.enc.Utf8);
        } catch (error) {
            // console.error("Decryption error:", error);
            return "";
        }
    };

    const encryptString = (text, key) => {
        try {
            const iv = CryptoJS.lib.WordArray.random(16);
            const encrypted = CryptoJS.AES.encrypt(
                text,
                CryptoJS.enc.Utf8.parse(key),
                {
                    iv: iv,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                }
            );

            const cipherText = CryptoJS.enc.Base64.stringify(
                iv.concat(encrypted.ciphertext)
            );
            return cipherText;
        } catch (error) {
            // console.error("Encryption error:", error);
            return "";
        }
    };

    const decryptJwtToken = (token) => {
        const decoded = jwtDecode(token);
        // console.log("Decoded JWT:", decoded);

        const encryptedCode = decoded.code;
        const encryptedUserId = decoded.user_id;

        const code = decryptString(encryptedCode, secretKey);
        const userId = decryptString(encryptedUserId, secretKey);

        // console.log("Decrypted Code:", code);
        // console.log("Decrypted User ID:", userId);

        return { code, userId };
    };

    const encryptJwtToken = async (data) => {
        const encryptedPayload = {};

        Object.keys(data).forEach((key) => {
            encryptedPayload[key] = encryptString(data[key], secretKey);
        });

        const secret = new TextEncoder().encode(secretKey);
        const token = await new SignJWT(encryptedPayload)
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("30m")
            .sign(secret);

        return token;
    };

    return (
        <JwtContext.Provider value={{ encryptJwtToken, decryptJwtToken }}>
            {children}
        </JwtContext.Provider>
    );
};