import React from 'react';
import { StatusBar } from 'expo-status-bar';
import GameScreen from './components/gameScreen';
import SettingScreen from './components/settingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Menus=createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer theme={menuTheme}>
      <StatusBar style="auto" />
      <Menus.Navigator initialRouteName='Game'>
        <Menus.Screen name='Game' component={GameScreen} />
        <Menus.Screen name='Settings' component={SettingScreen} />
      </Menus.Navigator>
    </NavigationContainer>
  )
};

const menuTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255,255,255)',
    background: 'rgb(68,68,68)',
    card: 'rgb(68,68,68)',
    text: 'rgb(255,255,255)',
    border: 'rgb(255,255,255)',
    notification: 'rgb(255,0,0)',
  }
};