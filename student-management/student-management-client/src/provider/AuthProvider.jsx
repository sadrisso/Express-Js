import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const addStudent = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {name: "drisso", addStudent, }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;