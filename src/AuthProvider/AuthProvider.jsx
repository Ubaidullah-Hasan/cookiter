import React, { Children, createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const auth = getAuth(app);

    // create account using email
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const [user, setUser] = useState('alamin')

    const authInfo = {
        createAccount,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;