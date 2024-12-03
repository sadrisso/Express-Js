import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div className=''>
            {user?.email}
        </div>
    );
};

export default Profile;