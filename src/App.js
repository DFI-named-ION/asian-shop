import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./component/HomePage"
import AuthorizationPage from './component/Authorization';
import RegistrationPage from "./component/Registration";

function App() {
    return (
        <>
			<Router>
				<Routes>
					<Route path='/' element={ <HomePage/> } />
					<Route path='/registration' element={ <RegistrationPage/> } />
					<Route path='/authorization' element={ <AuthorizationPage/> } />
				</Routes>
			</Router>
        </>
    );
}

export default App;