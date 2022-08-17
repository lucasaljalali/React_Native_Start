import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './components/screen';
import Btn from './components/btn';

let states={screenValue:'', result:0, operated:false, dot:false}

export default function App() {

  const[screenV,setScreenV]=useState(states.screenValue);
  const[resultV,setResultV]=useState(states.result);

  function addDigit(digit){
    if(digit=='+'||digit=='-'||digit=='/'||digit=='*'){states.dot=false}
    if(digit=='.' && !states.dot){states.dot=true; states.operated=false}
    else if(digit=='.' && states.dot){return};
    if((digit=='+'||digit=='-'||digit=='/'||digit=='*')&&states.operated){states.screenValue=states.result; states.result=0;};
    states.screenValue=states.screenValue+digit;
    setScreenV(states.screenValue);
    setResultV(states.result);
    states.operated=false;
  };

  function cleanScreen(){
    states={screenValue:'', result:0, operated:false, dot:false}
    setScreenV(states.screenValue)
    setResultV(states.result)
  };

  function oper(digit){
    if(digit=='AC'){cleanScreen();return}
    if(digit=='BS'){states.screenValue=screenV.substring(0,(screenV.length-1)); setScreenV(states.screenValue); return}
    try{states.result=eval(screenV); states.operated=true; setResultV(states.result)}
    catch{states.result='Error'; states.operated=true; setResultV(states.result)}
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>alJalali Calculator</Text>
      <Screen value={screenV} res={resultV}/>
      <View style={styles.btnsContainer}>
        <Btn label='AC' ac onClick={()=>{oper('AC')}}></Btn>
        <Btn label='(' onClick={()=>{addDigit('(')}}></Btn>
        <Btn label=')' onClick={()=>{addDigit(')')}}></Btn>
        <Btn label='/' operation onClick={()=>{addDigit('/')}}></Btn>
        <Btn label='7' onClick={()=>{addDigit('7')}}></Btn>
        <Btn label='8' onClick={()=>{addDigit('8')}}></Btn>
        <Btn label='9' onClick={()=>{addDigit('9')}}></Btn>
        <Btn label='*' operation onClick={()=>{addDigit('*')}}></Btn>
        <Btn label='4' onClick={()=>{addDigit('4')}}></Btn>
        <Btn label='5' onClick={()=>{addDigit('5')}}></Btn>
        <Btn label='6' onClick={()=>{addDigit('6')}}></Btn>
        <Btn label='-' operation onClick={()=>{addDigit('-')}}></Btn>
        <Btn label='1' onClick={()=>{addDigit('1')}}></Btn>
        <Btn label='2' onClick={()=>{addDigit('2')}}></Btn>
        <Btn label='3' onClick={()=>{addDigit('3')}}></Btn>
        <Btn label='+' operation onClick={()=>{addDigit('+')}}></Btn>
        <Btn label='0' onClick={()=>{addDigit('0')}}></Btn>
        <Btn label='.' onClick={()=>{addDigit('.')}}></Btn>
        <Btn label='<-' bs onClick={()=>{oper('BS')}}></Btn>
        <Btn label='=' equal onClick={()=>{oper('=')}}></Btn>        
      </View> 
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:50,
  },

  title:{
    color:'#999',
  },

  btnsContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
  },
});
