import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, TouchableHighlight, TextInput, Image } from 'react-native';

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
    <SafeAreaView style={styles.container}>

      <View style={styles.secContainer}>
        <Text>alJalali's BMI Calculator</Text>
      </View>

      <View style={styles.secContainer}>
        <Text>Type your weight (kg):</Text>
        <TextInput
        style={styles.txtInput}
        autoFocus={true}
        keyboardType={'numeric'}
        onChangeText={text=>setWeight(text.replace(/,/g, '.'))}
        >  
        </TextInput>
      </View>

      <View style={styles.secContainer}>
        <Text>Type your height (m):</Text>
        <TextInput
        style={styles.txtInput}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={text=>setHeight(text.replace(/,/g, '.'))}
        >  
        </TextInput>
      </View>

      <View style={styles.secContainer}>
        <TouchableHighlight style={styles.btn} onPress={Calc}>
          <Text style={styles.btnTxt}>Calculate your BMI</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.secContainer}>
        <Text>Result: {result}</Text>
      </View>

      <View style={styles.imgContainer}>
        <Image source={require('./assets/meter.png')} style={styles.img}/>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:StatusBar.currentHeight,
    marginHorizontal: 20,
  },

  secContainer: {
    marginVertical:10,
  },

  txtInput: {
    width:'100%',
    borderWidth:1,
    borderColor:'#000',
    padding:10,
    borderRadius:10,
  },

  btn: {
    backgroundColor:'#048',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:20,
  },

  btnTxt: {
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff',
  },

  imgContainer: {
    height:175,
    justifyContent:'center',
    alignItems: 'center',
  },

  img: {
    height:'100%',
    resizeMode:'contain',
  },  
});
