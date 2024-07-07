import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AuthProvider } from './component/providers/AuthProvider';
import { JwtProvider } from './component/providers/JwtProvider';

ReactDOM.render(
    <React.StrictMode>
        <JwtProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </JwtProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
