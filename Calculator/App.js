import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Screen from './components/screen';
import Btn from './components/btn';

export default function App() {

  const[operation,setOperation]=useState(0);
  const[result,setResult]=useState(0);
  const operate=()=>{setResult(eval(operation))};

  return (
    <View style={styles.container}>

      <Text>alJalali Calculator</Text>
      <Screen value={0} res={0}/>
      <View style={styles.btnsContainer}>
        <Btn label='AC' ac onClick={()=>{}}></Btn>
        <Btn label='(' onClick={()=>{}}></Btn>
        <Btn label=')' onClick={()=>{}}></Btn>
        <Btn label='/' operation onClick={()=>{}}></Btn>
        <Btn label='7' onClick={()=>{}}></Btn>
        <Btn label='8' onClick={()=>{}}></Btn>
        <Btn label='9' onClick={()=>{}}></Btn>
        <Btn label='*' operation onClick={()=>{}}></Btn>
        <Btn label='4' onClick={()=>{}}></Btn>
        <Btn label='5' onClick={()=>{}}></Btn>
        <Btn label='6' onClick={()=>{}}></Btn>
        <Btn label='-' operation onClick={()=>{}}></Btn>
        <Btn label='1' onClick={()=>{}}></Btn>
        <Btn label='2' onClick={()=>{}}></Btn>
        <Btn label='3' onClick={()=>{}}></Btn>
        <Btn label='+' operation onClick={()=>{}}></Btn>
        <Btn label='0' onClick={()=>{}}></Btn>
        <Btn label='.' onClick={()=>{}}></Btn>
        <Btn label='<-' bs onClick={()=>{}}></Btn>
        <Btn label='=' equal onClick={()=>{}}></Btn>


        
      </View> 
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  btnsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
});
