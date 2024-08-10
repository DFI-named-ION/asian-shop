import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useErrors } from "../providers/ErrorProvider";
import LoadingPage from "./LoadingPage";
import { useData } from "../providers/DataProvider";
import { useAuth } from "../providers/AuthProvider";

const PrivateRoute = () => {
    const { catchedError, handleMethod } = useErrors();
    const { requestData } = useData();
    const { user } = useAuth();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const method = async () => {
            await requestData("email;isVerified;displayName;");
        };

        handleMethod(async () => {
            await method();
            setIsLoaded(true);
        });
    }, []);

    if (catchedError.tags.includes("critical")) {
        return <LoadingPage error={catchedError} />;
    }
    return (
        <>
            {isLoaded && user.isVerified ? <Outlet /> : <LoadingPage isLoading />}
        </>
    );
};

export default PrivateRoute;
