import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Home } from "./src/screens/Home";
import { SignIn } from "./src/screens/SignIn";
import { NativeBaseProvider } from "native-base";


export default function App() {
  
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user: FirebaseAuthTypes.User) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  
  
  return (
    <NativeBaseProvider>
      {initializing ? <ActivityIndicator/> : (!user ? <SignIn/> : <Home/>)} 
    </NativeBaseProvider>
  );
};