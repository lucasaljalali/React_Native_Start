import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ThirdScreen({route, navigation}){

    const Test = route.params.Test;
    const AnotherTest = route.params.AnotherTest;
  
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello again Sir!</Text>
        <Text>This is the Third Screen</Text>
        <Text>This came from last page button: {Test}.</Text>
        <Text>This too: {AnotherTest}.</Text>
        <Button title='Back' onPress={()=>navigation.goBack()}/>
        <Button title='Home' onPress={()=>navigation.navigate('Home')}/>
      </View>
    )
  };