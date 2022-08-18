import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorageCourse from '@react-native-async-storage/async-storage';

export default function App(){

  const[course, setCourse]=useState(null);

  function Store(key, value){
    AsyncStorageCourse.setItem(key, value);
  };

  async function Get(key){
    const value = await AsyncStorageCourse.getItem(key);
    setCourse(value);
  };

  Store('01', 'React Native')
  Store('02', 'JavaScript')
  Store('03', 'C++')
  Store('04', 'HTML + CSS')

  Get('04')  

  return(
    <View style={styles.mainContainer}>
      <Text>Local Storage - Async-Storage</Text>
      <Text>Course of {course}</Text>
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