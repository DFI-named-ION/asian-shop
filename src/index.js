import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';

import { AuthProvider } from './component/providers/AuthProvider';
import { JwtProvider } from './component/providers/JwtProvider';

import { ErrorProvider } from './component/providers/ErrorProvider';
import { DataProvider } from './component/providers/DataProvider';
import { Provider } from 'react-redux';
import store from './component/providers/store';
axios.defaults.withCredentials = true;

ReactDOM.render(
    <React.StrictMode>
        <ErrorProvider>
            <Provider store={store}>
                <JwtProvider>
                    <AuthProvider>
                        <DataProvider>
                            <App />
                        </DataProvider>
                    </AuthProvider>
                </JwtProvider>
            </Provider>
        </ErrorProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
