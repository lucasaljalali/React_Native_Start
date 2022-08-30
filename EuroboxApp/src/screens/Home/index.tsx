import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";
import { KeyboardAvoidingView } from 'native-base';

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Book } from "../Book";
import { Trips } from "../Trips";

const { Navigator, Screen } = createBottomTabNavigator();

export function Home() {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      h={{ base: "400px", lg: "auto" }}
      flex={1}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        
          <Navigator 
            initialRouteName='Game'
            screenOptions={{
              headerShown: false, 
              tabBarIconStyle:{display:'none'},
              tabBarLabelStyle:{position:'absolute', top:0, fontSize:16, padding:5}
          }}>
            <Screen name='Book' component={Book} />
            <Screen name='Trips' component={Trips} />
          </Navigator>
        
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const menuTheme = {
  dark: false,
  documentTitle: false,
  colors: {
    primary: 'rgb(255,255,255)',
    background: 'rgb(68,68,68)',
    card: 'rgb(68,68,68)',
    text: 'rgb(255,255,255)',
    border: 'rgb(255,255,255)',
    notification: 'rgb(255,0,0)',
  }
};