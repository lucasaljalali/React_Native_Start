import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SecondScreen({navigation}){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello Sir!</Text>
        <Text>This is the Second Screen</Text>
        <Button title='Back' onPress={()=>navigation.goBack()}/>
        <Button title='Third Page' onPress={()=>navigation.navigate('Third', {Test:100, AnotherTest: 'comming from last page button'} )}/>
      </View>
    )
  };