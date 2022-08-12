import React, {useState} from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BtnCalc from './components/btnCalc';
import Ethanol from './components/ethanol';
import Gasoline from './components/gasoline';
import Result from './components/result';
import ResultImg from './components/resultImg';

export default function App() {

  const [gasoline, setGasoline] = useState(0);
  const [ethanol, setEthanol] = useState(0);
  const [result, setResult] = useState('');

  function Calculate(){
    if(!gasoline){
      alert('Insert gasoline price')
      return
    }
    if(!ethanol){
      alert('Insert ethanol price')
      return
    }
    let res;
    let calc = ((ethanol/gasoline)*100).toFixed(1);
    (calc > 70 ? res='Gasoline' : res='Ethanol');
    alert('Ethanol is costing ' + calc + '% of Gasoline. So, it is better to use ' + res);
    setResult(res);
  };

  function Clear(){
    setResult('');
  };

  function changeGasoline(v){
    Clear();
    setGasoline(v);
  };

  function changeEthanol(v){
    Clear();
    setEthanol(v);
  };

  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight, marginHorizontal: 20,}}>
      <Gasoline onChange={changeGasoline}/>
      <Ethanol onChange={changeEthanol}/>
      <BtnCalc onChange={Calculate}/>
      <Result onChange={result}/>
      <ResultImg onChange={result.charAt(0)}/>
    </SafeAreaView>
  )};
