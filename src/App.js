import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./component/HomePage"
import AuthorizationPage from './component/Authorization';
import RegistrationPage from "./component/Registration";
import MailConfirmationPage from "./component/MailConfirmation";

import { CookieProvider } from './component/providers/CookieProvider';
import { UserProvider } from './component/providers/UserProvider';

function App() {
    return (
        <>
			<CookieProvider>
				<UserProvider>
					<Router>
						<Routes>
							<Route path='/' element={<HomePage />} />
							<Route path='/registration' element={<RegistrationPage />} />
							<Route path='/authorization' element={<AuthorizationPage />} />
							<Route path='/confirmation' element={<MailConfirmationPage />} />
						</Routes>
					</Router>
				</UserProvider>
            </CookieProvider>
        </>
    );
}

export default App;