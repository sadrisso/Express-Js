import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    if (user) {
        return children;
    }
    else {
        navigate("/login");
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>

};

export default PrivateRoute;