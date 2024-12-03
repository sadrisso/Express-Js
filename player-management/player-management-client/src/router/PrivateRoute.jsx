import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    if (user) {
        return children;
    }
    else {
        navigate("/login")
    }

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;