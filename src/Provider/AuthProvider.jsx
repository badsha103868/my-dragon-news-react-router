import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// context create
 export const AuthContext = createContext();

 
const AuthProvider = ({ children }) => {
//  user state declare
  const [user, setUser] = useState(null);
  console.log(user)
  
  // register function/create user
   const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth ,email, password)
   }


  //  signIn function
  const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }
   
  //  signOut function
  const logOut = ()=>{
     return signOut(auth);
  }

    
  //  onAuthState function
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
       setUser(currentUser)
    });
    return ()=>{
      unsubscribe()
    }
  },[])

//  user man k variable a destructuring kora

const authData= {

  user,
  setUser,
  createUser,
  logOut,
  signIn,
}

 

  return (
    <AuthContext value={authData}>{children}</AuthContext>
  );
};

export default AuthProvider;
