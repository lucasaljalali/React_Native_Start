import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function HeightInput(props){
  return(
    <View style={styles.secContainer}>
        <Text>Type your height (m):</Text>
        <TextInput
        style={styles.txtInput}
        autoFocus={false}
        keyboardType={'numeric'}
        onChangeText={text=>props.onChangeHeight(text.replace(/,/g, '.'))}
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