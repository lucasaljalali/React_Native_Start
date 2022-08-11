import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView } from 'react-native';
import Comp1 from './components/comp1';
import Comp2FlatList from './components/comp2FlatList';
import ProfileCircleFlatList from './components/profileCircleFlatList';
import FcCompUseState from './components/FcCompUseState';
import ErrorBtn from './components/errorBtn'
import InputName from './components/TextInputBox';
import Touchable from './components/Touchable';
import ModalExample from './components/Modal';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({navigation}){
  
  const [on, setOn] = useState(true);
  const [color, setColor] = useState('gray');

  return(
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={color} animated={true}/>
      
      <ImageBackground source={require('./assets/bg1gray.jpg')} style={styles.backgroundImage}>
      
      {on?
        <View style={styles.secondaryContainer}>
          
          <Comp1/>
          <Comp2FlatList/>
          <ProfileCircleFlatList/>
            <View style={styles.buttonsContainer}>  
              <ErrorBtn/>
              <ModalExample/>
            </View>  
          <FcCompUseState name='Golf'/>
          <InputName/>
          <Touchable/>
          <View style={styles.buttonsContainer}>
            <Button title={'Red Status Bar'} color={'red'} onPress={()=>setColor('red')}/>
            <Button title={'Gray Status Bar'} color={'gray'} onPress={()=>setColor('gray')}/>
          </View>
          <Button title='Second Page' onPress={()=>navigation.navigate('Second')}/>
        
        </View>  
      :
      <Text>APP IS OFF</Text>
      }
      
      <Button title={on?"Off":"On"} color={on?"gray":"blue"} onPress={()=>setOn(!on)}/>

      </ImageBackground>
    
    </SafeAreaView>
  )
};

function SecondScreen({navigation}){
  return(
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello Sir!</Text>
      <Text>This is the Second Screen</Text>
      <Button title='Back' onPress={()=>navigation.goBack()}/>
      <Button title='Third Page' onPress={()=>navigation.navigate('Third', {Test:100, AnotherTest: 'comming from last page button'} )}/>
    </View>
  )
};

function ThirdScreen({route, navigation}){

  const Test = route.params.Test;
  const AnotherTest = route.params.AnotherTest;

  return(
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Hello again Sir!</Text>
      <Text>This is the Third Screen</Text>
      <Text>This came from last page button: {Test}.</Text>
      <Text>This too: {AnotherTest}.</Text>
      <Button title='Back' onPress={()=>navigation.goBack()}/>
      <Button title='Home' onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
};

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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
  },

  secondaryContainer: {
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
  },

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'space-evenly',
    width: '90%',
  },
});