import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  
  const googleLogin = (provider)=>{
    return signInWithPopup(auth,provider)
  }

  const githubLogin = (provider)=>{
    return signInWithPopup(auth , provider);
  }

  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (updatedData)=>{

    return updateProfile(auth.currentUser , updatedData)

  }

  const login = (email , password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOut = ()=>{
    return signOut(auth);
  }

  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    user,
    createUser,
    setUser,
    logOut,
    login,
    loading,
    setLoading,
    updateUser,
    resetPassword,
    googleLogin,
    githubLogin
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
