import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { NativeBaseProvider } from "native-base";

import { Home } from './src/screens/Home';
import { SignInPhone } from './src/screens/SignIn/indexPhone';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();

export default function App() {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={(!user ? 'SignIn' : 'Home')}>
            <Stack.Screen name='SignIn' component={SignInPhone} options={{ headerShown:false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} />    
          </Stack.Navigator>
        </NavigationContainer>        
      </NativeBaseProvider>
    );
  }; 