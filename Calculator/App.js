import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default function App() {

  const[operation,setOperation]=useState(0);
  const[result,setResult]=useState(0);
  const operate=()=>{setResult(eval(operation))};

  return (
    <View style={styles.container}>
      <Text>alJalali Calculator</Text>

      <View>
        <TextInput
          style={styles.firstDisplay}
          value={String(operation)}
          onChangeText={(text)=>{setOperation(text)}}
          keyboardType='numeric'
        ></TextInput>
        <TextInput
          style={styles.firstDisplay}
          value={String(result)}
          keyboardType='numeric'
        ></TextInput>
      </View>

      <TouchableHighlight 
        style={styles.btn}
        onPress={()=>operate()}
      >
        <Text>=</Text>
      </TouchableHighlight>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstDisplay:{
    width:'75%',
    padding:10,
    borderWidth:1,
    borderRadius:10,
  },

  btn:{
    backgroundColor:'#aaa',
    padding:20,
  },
});
