import 'react-native-gesture-handler';
import React from "react";
import { NativeBaseProvider } from "native-base";

import { SignIn } from "./src/screens/SignIn";
import { Register } from "./src/screens/Register";
import { Home } from './src/screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown:false }}/>
          <Stack.Screen name='Register' component={Register} options={{ headerShown:false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown:false }}/>    
        </Stack.Navigator>
      </NavigationContainer>        
    </NativeBaseProvider>
  );
}