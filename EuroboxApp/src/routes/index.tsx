
import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  
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

  if (initializing) return null;
  
  return (
    <NavigationContainer>
      <Navigator initialRouteName={user ? 'Home' : 'SignIn'} screenOptions={{ headerShown:false }}>
        <Screen name='SignIn' component={SignIn}/>
        <Screen name="Home" component={Home}/>    
      </Navigator>
    </NavigationContainer>        
  );
};