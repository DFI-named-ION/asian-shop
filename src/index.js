import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AuthProvider } from './component/providers/AuthProvider';
import { JwtProvider } from './component/providers/JwtProvider';

import axios from 'axios';
import { ErrorProvider } from './component/providers/ErrorProvider';
import { DataProvider } from './component/providers/DataProvider';
axios.defaults.withCredentials = true;

ReactDOM.render(
    <React.StrictMode>
        <ErrorProvider>
            <JwtProvider>
                <AuthProvider>
                    <DataProvider>
                        <App />
                    </DataProvider>
                </AuthProvider>
            </JwtProvider>
        </ErrorProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
