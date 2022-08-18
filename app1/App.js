import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default function App(){
  
  return(
    <View style={styles.mainContainer}>
      <Text>Local Storage - Async-Storage</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
});