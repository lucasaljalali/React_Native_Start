import 'react-native-gesture-handler';
import React from "react";
import { NativeBaseProvider } from "native-base";

import { Home } from './src/screens/Home';
import { SignInPhone } from './src/screens/SignIn/indexPhone';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SignIn' component={SignInPhone} options={{ headerShown:false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown:false }}/>    
        </Stack.Navigator>
      </NavigationContainer>        
    </NativeBaseProvider>
  );
}