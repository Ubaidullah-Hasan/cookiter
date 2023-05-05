import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className='d-flex justify-content-center my-5'>
                <Spinner animation="border" variant="success" />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true} state={{form: location}}></Navigate>;
};

export default PrivateRoute;