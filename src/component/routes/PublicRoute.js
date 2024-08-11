import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useErrors } from "../providers/ErrorProvider";
import LoadingPage from "./LoadingPage";
import { useData } from "../providers/DataProvider";
import { useAuth } from "../providers/AuthProvider";

const PublicRoute = () => {
    const { catchedError, handleMethod } = useErrors();
    const { requestFields } = useData();

    useEffect(() => {
        const method = async () => {
            await requestFields("email;displayName;isSeller;");
        };

        handleMethod(async () => {
            await method();
        });
    }, []);

    return <Outlet />;
};

export default PublicRoute;
