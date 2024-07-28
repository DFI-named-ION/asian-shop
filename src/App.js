import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./component/HomePage"
import AuthorizationPage from './component/Authorization';
import RegistrationPage from "./component/Registration";
import MailConfirmationPage from "./component/MailConfirmation";
import PasswordChangeMail from "./component/PasswordChangeMail";
import PasswordChange from "./component/PasswordChange";
import ProfilePage from './component/ProfilePage';
import Seller from './component/seller_comp/Seller';
import SellerOptionProfile from "./component/seller_comp/SellerOptionProfile";
import SellerOptionCompany from "./component/seller_comp/SellerOptionCompany";
import SellerGoodsPromotion from "./component/seller_comp/SellerGoodsPromotion";

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
						<Route path='/seller' element={<Seller />}/>
                        <Route path='/seller/profile' element={<SellerOptionProfile />}/>
                        <Route path='/seller/company' element={<SellerOptionCompany />}/>
                        <Route path='/seller/promotions' element={<SellerGoodsPromotion />}/>
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