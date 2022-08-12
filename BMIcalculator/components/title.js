import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Title(){
  return(
    <View style={styles.secContainer}>
        <Text>alJalali's BMI Calculator</Text>
    </View>
  )};


    const styles = StyleSheet.create({
      secContainer: {
        marginVertical:10,
      },
      });