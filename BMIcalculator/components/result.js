import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Result(props){
  return(
    <View style={styles.secContainer}>
        <Text>Result: {props.onChange}</Text>
    </View>
  )};


    const styles = StyleSheet.create({
        secContainer: {
          marginVertical:10,
        },
      });