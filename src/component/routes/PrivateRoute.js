import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../providers/AuthProvider";

const PrivateRoute = () => {
    const { user, pending } = useAuth;

    if (pending) {
        return null;
    }

    if (!user) {
        return <Navigate to="/authorization" />;
    }

    return user.emailVerified ? <Outlet /> : <Navigate to="/confirmation" />;
};

export default PrivateRoute;
