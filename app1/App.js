import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Button, Ima, ImageBackground } from 'react-native';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import ProfileImage from './components/profileCircle';
import Comp2FlatList from './components/comp2FlatList';
import ProfileCircleFlatList from './components/profileCircleFlatList';
import { LinearGradient } from "expo-linear-gradient";


const doble = n=>n*2;
const sum = (n1,n2)=>n1+n2;
const errorMsg = ()=>{Alert.alert('Error', 'This is a error message')}



export default function App() {
  
  const [on, setOn] = useState(true);
  
  return (
    
    <View style={styles.mainContainer}>
      <StatusBar style='auto'/>
      
      <ImageBackground source={require('./assets/bg1gray.jpg')} style={styles.backgroundImage}>
      
      {on?
        <View style={styles.secondaryContainer}>
        
          <Comp1/>
          
          <Image source={require('./assets/logo.png')} style={styles.logoImage}/>
          
          <Comp2FlatList/>
          
          <ProfileCircleFlatList/>
          
          <Text style={{ backgroundColor: 'white', marginBottom: 10 }}>{doble(10)}</Text>
          <Text style={{ backgroundColor: 'white', marginBottom: 10 }}>{sum(20,40)}</Text>
          
          <Button title='Press for Error' color='red' onPress={errorMsg}/>
        
        </View>  
      :
      <Text></Text>
      }
      
      <Button title={on?"Off":"On"} color='blue' onPress={()=>setOn(!on)}/>

      </ImageBackground>
    
    </View>
  );
};


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

  secondaryContainer: {
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
  },

  logoImage: {
    resizeMode: 'contain', 
    height: 75,
    marginBottom: 25,
  },
});