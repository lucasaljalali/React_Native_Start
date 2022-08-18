import React from 'react';
import { View, Button } from 'react-native';
//types of navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//my pages to navigate
import ThirdScreen from './pages/ThirdPage';
import SecondScreen from './pages/SecondPage';
import HomeScreen from './pages/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*this is the navigation by StackNavigator*/
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home Page'
        screenOptions={{
          headerStyle: {backgroundColor: '#222',},
          headerTintColor: '#999',
          headerTitleStyle: {fontWeight: 'bold',},
          headerRight: ()=>(
            <View style={{flexDirection: 'row', width:150, justifyContent:'space-evenly'}}>
              <Button title="Don't Press" color='#999' onPress={()=>alert('Uhm.. you are curious!')}/>
            </View>
          )
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title:'Home Screen'}}
        />
        <Stack.Screen
          name='Second'
          component={SecondScreen}
          options={{title:'Second Screen'}}
        />
        <Stack.Screen
          name='Third'
          component={ThirdScreen}
          options={{title:'Third Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

/*this is the navigation by Tab Navigator
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home Page'
        screenOptions={{
          headerStyle: {backgroundColor: '#222',},
          headerTintColor: '#999',
          headerTitleStyle: {fontWeight: 'bold',},
          headerRight: ()=>(
            <View style={{flexDirection: 'row', width:150, justifyContent:'space-evenly'}}>
              <Button title="Don't Press" color='#999' onPress={()=>alert('Uhm.. you are curious!')}/>
            </View>
          )
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{title:'Home Screen'}}
        />
        <Tab.Screen
          name='Second'
          component={SecondScreen}
          options={{title:'Second Screen'}}
        />
        <Tab.Screen
          name='Third'
          component={ThirdScreen}
          options={{title:'Third Screen'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
};*/

/*this is the navigation by Drawer Navigator
export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName='Home Page'
        screenOptions={{
          headerStyle: {backgroundColor: '#222',},
          headerTintColor: '#999',
          headerTitleStyle: {fontWeight: 'bold',},
          headerRight: ()=>(
            <View style={{flexDirection: 'row', width:150, justifyContent:'space-evenly'}}>
              <Button title="Don't Press" color='#999' onPress={()=>alert('Uhm.. you are curious!')}/>
            </View>
          )
        }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeScreen}
          options={{title:'Home Screen'}}
        />
        <Drawer.Screen
          name='Second'
          component={SecondScreen}
          options={{title:'Second Screen'}}
        />
        <Drawer.Screen
          name='Third'
          component={ThirdScreen}
          options={{title:'Third Screen'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};*/

