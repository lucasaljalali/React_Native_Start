import React from 'react';
import GameScreen from './components/gameScreen';
import SettingScreen from './components/settingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs=createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer theme={menuTheme}>
      <Tabs.Navigator 
        initialRouteName='Game'
        screenOptions={{
          headerShown: false, 
          tabBarIconStyle:{display:'none'},
          tabBarLabelStyle:{position:'absolute', top:0, fontSize:16, padding:5}
        }}>
        <Tabs.Screen name='Game' component={GameScreen} />
        <Tabs.Screen name='Settings' component={SettingScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
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