import React, { useContext, useState } from 'react';

import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";
import axios from 'axios';

import { UserContext } from './providers/UserProvider';

export default function ProfilePage() {

    const {user, setUser} = useContext(UserContext);

    const handleRequest = async (event) => {
        event.preventDefault();
        console.log(user);
    };


    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (err) {
            handleError(err);
        };

        window.location = "/";
    };

    const handleError = (error) => {
        console.log(`${error}`);
    };

    return (
        <>
            <div className='text-center mx-auto' style={{backgroundColor: "dimgray", fontSize: "15pt"}}>
                {user ?
                    <>
                        <h4>Пошта: {user.email}</h4>
                        <p>Токен доступу: {user.stsTokenManager.accessToken}</p>
                        <p>Чи підтверджена пошта: {user.emailVerified ? "Так" : "Ні"}</p>
                        <p>Час реєстрації: {new Date(Number(user.createdAt)).toString()}</p>
                        <p>Час останнього логіну: {new Date(Number(user.lastLoginAt)).toString()}</p>
                        <signOut></signOut>
                        <button onClick={handleLogout}>Вийти</button>
                    </>
                :
                    <>
                        <h4>Користувач не в системі!</h4>
                        <p>Користувач не в системі!</p>
                    </>
                }
                <br/>
            </div>
        </>
    );
}