import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./component/HomePage"
import AuthorizationPage from './component/Authorization';
import ShopRegistrationPage from "./component/ShopRegistration";
import ShopAuthorizationPage from './component/ShopAuthorization';
import RegistrationPage from "./component/Registration";
import MailConfirmationPage from "./component/MailConfirmation";
import PasswordChangeMail from "./component/PasswordChangeMail";
import PasswordChange from "./component/PasswordChange";
import ProfilePage from './component/ProfilePage';
import Market from './component/Market';
import MarketMenu from './component/MarketMenu';
import Seller from './component/seller_comp/Seller';
import SellerOptionProfile from "./component/seller_comp/SellerOptionProfile";
import SellerOptionCompany from "./component/seller_comp/SellerOptionCompany";
import SellerGoodsPromotion from "./component/seller_comp/SellerGoodsPromotion";
import SellerGoodsPromotionList from "./component/seller_comp/SellerGoodsPromotionList";
import SellerGoodsCategories from "./component/seller_comp/SellerGoodsCategories";
import SellerGoodsPosition from "./component/seller_comp/SellerGoodsPosition";
import SellerAddPosition from "./component/seller_comp/SellerAddPosition";
import SellerOptionManager from "./component/seller_comp/SellerOptionManager";
import SellerOptionDelivery from "./component/seller_comp/SellerOptionDelivery";
import OptionDeliveryUkrPost from "./component/seller_comp/OptionDeliveryUkrPost";
import OptionDeliveryRozetka from "./component/seller_comp/OptionDeliveryRozetka";
import OptionDeliveryNovaPost from "./component/seller_comp/OptionDeliveryNovaPost";
import SellerOptionPay from "./component/seller_comp/SellerOptionPay";
import SellerOptionSchedule from "./component/seller_comp/SellerOptionSchedule";
import FAQ from "./component/FAQ";
import AboutUs from "./component/AboutUs";
import PrivacyPolicy from "./component/PrivacyPolicy";
import TermsOfUse from "./component/TermsOfUse";
import BoxPage from "./component/BoxPage";
import Chosen from "./component/Chosen";
import ReviewsClient from "./component/ReviewsClient";
import ReviewsSeller from "./component/ReviewsSeller";
import OrderHistory from "./component/OrderHistory";
import ProductTracking from "./component/ProductTracking";
import GoodPage from "./component/GoodPage";
import Page404 from "./component/Page404";

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
                        <Route path='/seller/promotions' element={<SellerGoodsPromotionList />}/>
                        <Route path='/seller/promotions/add' element={<SellerGoodsPromotion />}/>
                        <Route path='/seller/categories' element={<SellerGoodsCategories />}/>
                        <Route path='/seller/positions' element={<SellerGoodsPosition />}/>
                        <Route path='/seller/positions/add' element={<SellerAddPosition />}/>
                        <Route path='/seller/managers' element={<SellerOptionManager />}/>
                        <Route path='/seller/shipping' element={<SellerOptionDelivery />}/>
                        <Route path='/seller/shipping/novapost' element={<OptionDeliveryNovaPost />}/>
                        <Route path='/seller/shipping/rozetka' element={<OptionDeliveryRozetka />}/>
                        <Route path='/seller/shipping/urkpost' element={<OptionDeliveryUkrPost />}/>
                        <Route path='/seller/payment' element={<SellerOptionPay />}/>
                        <Route path='/seller/schedule' element={<SellerOptionSchedule />}/>
                    </Route>
                    <Route element={<PrivateRoute />}> {/* USER IN SYSTEM AND IS VERIFIED */}
						{/* // some routes */}
                    </Route>
                    <Route element={<NotVerifiedRoute />}> {/* USER IN SYSTEM */}
                        <Route path='/profile-settings' element={<ProfilePage />} />
                        <Route path='/confirmation' element={<MailConfirmationPage />} />
                    </Route>
                    <Route element={<PublicRoute />}> {/* AVAILABLE FOR EVERYONE */}
                        <Route path='/catalog/menu' element={<MarketMenu />} />
                        <Route path='/catalog/' element={<Market />} />
                        <Route path='/catalog/:article' element={<GoodPage />} />
                        <Route path='/registration' element={<RegistrationPage />} />
                        <Route path='/authorization' element={<AuthorizationPage />} />
                        <Route path='/seller/registration' element={<ShopRegistrationPage />}/>
                        <Route path='/seller/authorization' element={<ShopAuthorizationPage />}/>
                        <Route path='/reset-password-verification' element={<PasswordChangeMail />} />
                        <Route path='/reset-password' element={<PasswordChange />} />
                        <Route path='/faq' element={<FAQ />} />
                        <Route path='/about' element={<AboutUs />} />
                        <Route path='/privacy' element={<PrivacyPolicy />} />
                        <Route path='/terms-of-use' element={<TermsOfUse />} />
                        <Route path='/boxes' element={<BoxPage />} />
                        <Route path='/favorites' element={<Chosen />} />
                        <Route path='/reviews-my' element={<ReviewsClient />} />
                        <Route path='/reviews-sellers' element={<ReviewsSeller />} />
                        <Route path='/orders-history' element={<OrderHistory />} />
                        <Route path='/tracking' element={<ProductTracking />} />
						<Route path='/' element={<HomePage />} />
                        <Route path='/*' element={<Page404 />} />
                    </Route>
                </Routes>
			</Router>
        </>
    );
}

export default App;