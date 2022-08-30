
import React, { useEffect, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);
    return subscriber; // unsubscribe on unmount
  }, []);
  
  return (
    <NavigationContainer>
      <Navigator initialRouteName={user ? 'Home' : 'SignIn'} screenOptions={{ headerShown:false }}>
        <Screen name='SignIn' component={SignIn}/>
        <Screen name="Home" component={Home}/>    
      </Navigator>
    </NavigationContainer>        
  );
};