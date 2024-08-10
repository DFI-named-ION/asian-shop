import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = ({ isLoading, error }) => {
    const navigate = useNavigate();

    if (error) {
        return (
            <div className='mx-auto text-center mt-5'>
                <h1>Error</h1>
                <p>{error.short}</p>
                <p>{error.long}</p>
                <button onClick={() => navigate("/")}>Go back to main</button>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className='mx-auto text-center mt-5'>
                <p>Loading...</p>
            </div>
        );
    }

    return null;
};

export default LoadingPage;