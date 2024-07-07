import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = () => {
    const { user, pending } = useContext(AuthContext);

    if (pending) {
        return null;
    }

    if (!user) {
        return <Navigate to="/authorization" />;
    }

    return user.emailVerified ? <Outlet /> : <Navigate to="/confirmation" />;
};

export default PrivateRoute;
