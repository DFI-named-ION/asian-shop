import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./component/ProfilePage"
import AuthorizationPage from './component/Authorization';
import RegistrationPage from "./component/Registration";
import MailConfirmationPage from "./component/MailConfirmation";
import PasswordChangeMail from "./component/PasswordChangeMail";
import PasswordChange from "./component/PasswordChange";
import ProfilePage from './component/ProfilePage';

import PrivateRoute from './component/routes/PrivateRoute';
import PublicRoute from './component/routes/PublicRoute';
import NotVerifiedRoute from './component/routes/NotVerifiedRoute';

function App() {
    return (
        <>
			<Router>
				{/* <Routes>
					<Route path='/reset' element={<ProfilePage/>}/>
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/confirmation' element={<MailConfirmationPage />} />
					<Route path='/registration' element={<RegistrationPage />} />
					<Route path='/authorization' element={<AuthorizationPage />} />
                    <Route path='/reset-password-verification' element={<PasswordChangeMail />} />
                    <Route path='/reset-password' element={<PasswordChange />} />
					<Route path='/' element={<HomePage />} />
				</Routes> */}
				<Routes>
                    <Route element={<PrivateRoute />}>
						<Route path='/test' element={<ProfilePage/>}/>
                    </Route>
                    <Route element={<NotVerifiedRoute />}>
                        <Route path='/profile-settings' element={<ProfilePage />} />
                        <Route path='/confirmation' element={<MailConfirmationPage />} />
                    </Route>
                    <Route element={<PublicRoute />}>
                        <Route path='/registration' element={<RegistrationPage />} />
                        <Route path='/authorization' element={<AuthorizationPage />} />
                        <Route path='/reset-password-verification' element={<PasswordChangeMail />} />
                        <Route path='/reset-password' element={<PasswordChange />} />
						<Route path='/' element={<HomePage />} />
                    </Route>
                </Routes>
			</Router>
        </>
    );
}

export default App;