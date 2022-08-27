import React from "react";
import { NativeBaseProvider } from "native-base";

import { SignIn } from "./src/screens/SignIn";
import { Register } from "./src/screens/Register";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Register" component={Register} options={{ headerShown:false }}/>      
        </Stack.Navigator>
      </NavigationContainer>        
    </NativeBaseProvider>
  );
}

//<Stack.Screen name="SignIn" component={SignIn} options={{ headerShown:false }}/>