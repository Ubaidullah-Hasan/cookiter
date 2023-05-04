import React, { Children, createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
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
    // create account using GitHub
    const githubProvider = new GithubAuthProvider();
    const createUserByGitHub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const [user, setUser] = useState('alamin')

    const authInfo = {
        createAccount,
        createUserByGoogle,
        createUserByGitHub,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;