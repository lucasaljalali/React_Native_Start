import react, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Comp1 from './components/comp1';
import Comp2FlatList from './components/comp2FlatList';
import ProfileCircleFlatList from './components/profileCircleFlatList';
import FcCompUseState from './components/FcCompUseState';
import Car from './components/ClassCompUseState';
import Calcs from './components/FcCalcs'
import ErrorBtn from './components/errorBtn'

export default function App() {
  
  const [on, setOn] = useState(true);
  
  return (
    
    <View style={styles.mainContainer}>
      <StatusBar style='auto'/>
      
      <ImageBackground source={require('./assets/bg1gray.jpg')} style={styles.backgroundImage}>
      
      {on?
        <View style={styles.secondaryContainer}>
          
          <Comp1/>
          <Comp2FlatList/>
          <ProfileCircleFlatList/>
          <Calcs/>
          <ErrorBtn/>
          <FcCompUseState name='Golf'/>
          <Car name='Polo'/>
        
        </View>  
      :
      <Text>APP IS OFF</Text>
      }
      
      <Button title={on?"Off":"On"} color={on?"gray":"blue"} onPress={()=>setOn(!on)}/>

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
});