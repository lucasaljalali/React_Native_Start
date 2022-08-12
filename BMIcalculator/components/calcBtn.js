import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default function CalcBtn(props){
  return(
    <View style={styles.secContainer}>
        <TouchableHighlight style={styles.btn} onPress={props.onChange}>
          <Text style={styles.btnTxt}>Calculate your BMI</Text>
        </TouchableHighlight>
    </View>
  )};


    const styles = StyleSheet.create({
        secContainer: {
          marginVertical:10,
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
      });