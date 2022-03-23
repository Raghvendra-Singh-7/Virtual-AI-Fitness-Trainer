import React,{useContext,useState,useEffect} from 'react'
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'
const AuthContext = React.createContext()
//import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'

export function useAuth()
{
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser,setCurrentUser] = useState()

    function signup(email,password)
    {
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        }, [] )
        return unsubscribe
    })
    

    const value = {
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
     {children}
    </AuthContext.Provider>
      
  )
}
