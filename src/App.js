import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./component/PaymentPage"
import AuthorizationPage from './component/Authorization';
import ShopRegistrationPage from "./component/ShopRegistration";
import ShopAuthorizationPage from './component/ShopAuthorization';
import RegistrationPage from "./component/Registration";
import MailConfirmationPage from "./component/MailConfirmation";
import PasswordChangeMail from "./component/PasswordChangeMail";
import PasswordChange from "./component/PasswordChange";
import ProfilePage from './component/ProfilePage';
import MarketMenu from './component/MarketMenu';
import Seller from './component/seller_comp/Seller';
import SellerOptionProfile from "./component/seller_comp/SellerOptionProfile";
import SellerOptionCompany from "./component/seller_comp/SellerOptionCompany";
import SellerGoodsPromotion from "./component/seller_comp/SellerGoodsPromotion";
import SellerGoodsCategories from "./component/seller_comp/SellerGoodsCategories";
import SellerGoodsPosition from "./component/seller_comp/SellerGoodsPosition";
import SellerAddPosition from "./component/seller_comp/SellerAddPosition";
import SellerOptionManager from "./component/seller_comp/SellerOptionManager";
import FAQ from "./component/FAQ";
import AboutUs from "./component/AboutUs";
import PrivacyPolicy from "./component/PrivacyPolicy";
import GoodPage from "./component/GoodPage";

import SellerRoute from "./component/routes/SellerRoute";
import PrivateRoute from './component/routes/PrivateRoute';
import PublicRoute from './component/routes/PublicRoute';
import NotVerifiedRoute from './component/routes/NotVerifiedRoute';

function App() {
    return (
        <>
			<Router>
				<Routes>
                    <Route element={<SellerRoute />}> {/* USER IN SYSTEM AND IS SELLER */}
						<Route path='/seller' element={<Seller />}/>
                        <Route path='/seller/profile' element={<SellerOptionProfile />}/>
                        <Route path='/seller/company' element={<SellerOptionCompany />}/>
                        <Route path='/seller/promotions' element={<SellerGoodsPromotion />}/>
                        <Route path='/seller/categories' element={<SellerGoodsCategories />}/>
                        <Route path='/seller/positions' element={<SellerGoodsPosition />}/>
                        <Route path='/seller/positions/add' element={<SellerAddPosition />}/>
                        <Route path='/seller/managers' element={<SellerOptionManager />}/>
                    </Route>
                    <Route element={<PrivateRoute />}> {/* USER IN SYSTEM AND IS VERIFIED */}
						{/* // some routes */}
                    </Route>
                    <Route element={<NotVerifiedRoute />}> {/* USER IN SYSTEM */}
                        <Route path='/profile-settings' element={<ProfilePage />} />
                        <Route path='/confirmation' element={<MailConfirmationPage />} />
                    </Route>
                    <Route element={<PublicRoute />}> {/* AVAILABLE FOR EVERYONE */}
                        <Route path='/catalog' element={<MarketMenu />} />
                        <Route path='/catalog/*' element={<GoodPage />} />
                        <Route path='/registration' element={<RegistrationPage />} />
                        <Route path='/authorization' element={<AuthorizationPage />} />
                        <Route path='/seller/registration' element={<ShopRegistrationPage />}/>
                        <Route path='/seller/authorization' element={<ShopAuthorizationPage />}/>
                        <Route path='/reset-password-verification' element={<PasswordChangeMail />} />
                        <Route path='/reset-password' element={<PasswordChange />} />
                        <Route path='/faq' element={<FAQ />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/privacy' element={<PrivacyPolicy />} />
						<Route path='/' element={<HomePage />} />
                    </Route>
                </Routes>
			</Router>
        </>
    );
}

export default App;