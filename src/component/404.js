import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Header from '../component/Header';

import { facebook, google, twitter } from "./../firebaseConfig";

import { useAuth } from './providers/AuthProvider';
import { useErrors } from "./providers/ErrorProvider";

function App() {
    return <Header />;
    
}

export default function Registration() {

    return (
        <body className='error-body'>
           <div className="block-error">
            <p>Ви загубилися в ліліях, час повернутися <a href="#">на головну</a> ( ´ ▽ ` )ﾉ</p>
           </div>
        </body>
    )
}