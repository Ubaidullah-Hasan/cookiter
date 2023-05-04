import React, { Children, createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    // Login using email
    const loginByemail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut 
    const logedOut = () => {
        return signOut(auth);
    }

    // update profile
    const userProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // use state check
    const [user, setUser] = useState('alamin')
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe;
    },[]);

    const authInfo = {
        createAccount,
        createUserByGoogle,
        createUserByGitHub,
        loginByemail,
        logedOut,
        userProfile,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;