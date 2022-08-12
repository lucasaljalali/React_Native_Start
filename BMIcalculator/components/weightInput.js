import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function WeightInput(props){
  return(
    <View style={styles.secContainer}>
    <Text>Type your weight (kg):</Text>
    <TextInput
    style={styles.txtInput}
    autoFocus={true}
    keyboardType={'numeric'}
    onChangeText={text=>props.onChangeWeight(text.replace(/,/g, '.'))}
    >  
    </TextInput>
    </View>
  )};


    const styles = StyleSheet.create({
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
      });