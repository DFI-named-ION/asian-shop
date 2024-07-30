import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../providers/AuthProvider";

const NotVerifiedRoute = () => {
    // const { user, pending } = useAuth();

    // if (pending) {
    //     return <div>Loading...</div>;
    // }

    // return user ? <Outlet /> : <Navigate to="/authorization" />;
    return <Outlet />;
};

export default NotVerifiedRoute;
