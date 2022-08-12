import React, {useState} from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import WeightInput from './components/weightInput';
import HeightInput from './components/heightInput';
import CalcBtn from './components/calcBtn';
import Result from './components/result';
import ImageBMI from './components/imageBMI';
import Title from './components/title';


export default function CalcBMI() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState(0);

  function Calc(){
    
    if(weight==0 || !weight){
      alert('inform your weight')
      return
    };
    if(height==0 || !height){
      alert('inform your height')
      return
    };
    const r = weight/(height*height);
    setResult(r.toFixed(1));
  };

  return (
    <SafeAreaView style={{marginTop:StatusBar.currentHeight, marginHorizontal: 20,}}>
      <Title/>
      <WeightInput onChangeWeight={setWeight}/>
      <HeightInput onChangeHeight={setHeight}/>
      <CalcBtn onChange={Calc}/>  
      <Result onChange={result}/>
      <ImageBMI/>
    </SafeAreaView>
  )};
