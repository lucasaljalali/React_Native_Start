import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Screen(props) {
  return (
      <View style={styles.screenContainer}>
        <Text style={styles.txtOperation} numberOfLines={1}>
          {props.value}
        </Text>
        <Text style={styles.txtResult} numberOfLines={1}>
          {props.res}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  screenContainer:{
    backgroundColor:'#444',
    padding:20,
    width:'95%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  txtOperation:{
    fontSize:25,
    padding:10,
    color:'#fff',
  },

  txtResult:{
    fontSize:50,
    padding:10,
    color:'#fff',
  },
});
