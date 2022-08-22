import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, SafeAreaView } from 'react-native';
import Comp1 from '../components/comp1';
import Comp2FlatList from '../components/comp2FlatList';
import ProfileCircleFlatList from '../components/profileCircleFlatList';
import FcCompUseState from '../components/FcCompUseState';
import ErrorBtn from '../components/errorBtn'
import InputName from '../components/TextInputBox';
import Touchable from '../components/Touchable';
import ModalExample from '../components/Modal';

export default function HomeScreen({navigation}){
  
    const [on, setOn] = useState(true);
    const [color, setColor] = useState('gray');
  
    return(
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar backgroundColor={color} animated={true}/>
        
        <ImageBackground>
        
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