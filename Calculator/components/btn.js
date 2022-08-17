import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';

export default function Btn(props) {
  
  const btnsStyles=[styles.btn];
  if(props.doble){btnsStyles.push(styles.btnDoble)}
  if(props.equal){btnsStyles.push(styles.btnEqual)}
  if(props.operation){btnsStyles.push(styles.btnOper)}
  if(props.ac){btnsStyles.push(styles.btnAC)}
  if(props.bs){btnsStyles.push(styles.btnBS)}

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={btnsStyles}>{props.label}</Text>
    </TouchableHighlight>
  )
};

const styles = StyleSheet.create({
  btn:{
    fontSize:30,
    height:Dimensions.get('window').width/4,
    width:Dimensions.get('window').width/4,
    padding:20,
    backgroundColor:'#222',
    color:'#fff',
    borderWidth:1,
    borderColor:'#666',
    textAlign:'center',
  },

  btnOper:{
    color:'#cc6900',
  },

  btnEqual:{
    color:'#ffcc66',
  },

  btnAC:{
    color:'#993300',
  },

  btnBS:{
    color:'#804000',
  },

  btnDoble:{
    width:Dimensions.get('window').width/2,
  },
});
