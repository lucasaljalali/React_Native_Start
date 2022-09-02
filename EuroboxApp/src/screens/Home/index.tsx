import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Book } from "../Book";
import { Trips } from "../Trips";
import { NavigationContainer } from "@react-navigation/native";
import { User } from "../User";

const { Navigator, Screen } = createBottomTabNavigator();

export function Home() {

  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName={'Book'}
        screenOptions={{
        headerShown: false, 
        tabBarIconStyle:{display:'none'},
        tabBarLabelStyle:{position:'absolute', top:0, fontSize:16, padding:5}
        }}>
        <Screen name='Book' component={Book}/>
        <Screen name='Trips' component={Trips}/>
        <Screen name='User' component={User}/>
      </Navigator>
    </NavigationContainer>
  )
};