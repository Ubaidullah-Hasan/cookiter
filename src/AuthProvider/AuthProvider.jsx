import React, { Children, createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    // create account using email
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create account using google
    const provider = new GoogleAuthProvider();
    const createUserByGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const [user, setUser] = useState('alamin')

    const authInfo = {
        createAccount,
        createUserByGoogle,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;