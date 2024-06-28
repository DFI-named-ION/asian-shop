import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import HomePage from "./component/HomePage"
import AuthorizationPage from './component/Authorization';
import RegistrationPage from "./component/Registration";
import MailConfirmationPage from "./component/MailConfirmation";

import AcceptRedirect from "./component/hooks/AcceptRedirect";

import { CookieProvider } from './component/providers/CookieProvider';
import { UserProvider } from './component/providers/UserProvider';

function App() {
	const [params, setParams] = useState([]);

    return (
        <>
			<CookieProvider>
				<UserProvider>
					<Router>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/registration' element={<RegistrationPage />} />
							<Route path='/authorization' element={<AuthorizationPage {...{params, setParams}}/>} />
							<Route path='/confirmation' element={<MailConfirmationPage />} />
							<Route path='/acceptHook' element={<AcceptRedirect {...{params, setParams}}/>} />
						</Routes>
					</Router>
				</UserProvider>
            </CookieProvider>
        </>
    );
}

export default App;