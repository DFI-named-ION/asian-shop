import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../providers/AuthProvider";

const PrivateRoute = () => {
    // const { user, pending } = useAuth();

    // if (pending) {
    //     return <div>Loading...</div>;
    // }

    // return user && user.isVerified ? <Outlet /> : <Navigate to="/authorization" />;
    return <Outlet />;
};

export default PrivateRoute;
