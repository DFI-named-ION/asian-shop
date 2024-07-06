import React, { useContext } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from "../providers/AuthProvider";

const NotVerifiedRoute = () => {
    const { user, pending } = useContext(AuthContext);

    if (pending) {
        return null;
    }

    return user ? <Outlet /> : <Navigate to="/authorization" />;
};

export default NotVerifiedRoute;
