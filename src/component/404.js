import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Arrow from '../images/icons/arrowLeft.svg';
import Google from '../images/socials/google-auth.svg';
import Facebook from '../images/socials/facebook-auth.svg';
import Twitter from '../images/socials/twitter-auth.svg';

import { facebook, google, twitter } from "./../firebaseConfig";

import { useAuth } from './providers/AuthProvider';
import { useErrors } from "./providers/ErrorProvider";

function App() {
    return <Google />;
    return <Facebook />;
    return <Twitter />;
    return <Arrow />;
}

export default function Registration() {

    return (
        <body className='authorization-body'>
           
        </body>
    )
}