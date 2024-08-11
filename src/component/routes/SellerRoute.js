import React, { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';
import { useErrors } from "../providers/ErrorProvider";
import LoadingPage from "./LoadingPage";
import { useData } from "../providers/DataProvider";
import { useAuth } from "../providers/AuthProvider";

const PrivateRoute = () => {
    const { catchedError, handleMethod } = useErrors();
    const { requestFields } = useData();
    const { user } = useAuth();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const method = async () => {
            await requestFields("email;isVerified;isSeller;sellerFirstName;sellerLastName;sellerMiddleName;sellerId;sellerPhone;");
        };

        handleMethod(async () => {
            await method();
            setIsLoaded(true);
        });
    }, []);

    if (catchedError.tags.includes("critical")) {
        return <LoadingPage error={catchedError} />;
    }

    if (isLoaded && user && (!user.isSeller || !user.isVerified)) {
        handleMethod(() => {
            throw "unauthorized";
        });
    }

    return (
        <>
            {isLoaded ? <Outlet /> : <LoadingPage isLoading />}
        </>
    );
};

export default PrivateRoute;
