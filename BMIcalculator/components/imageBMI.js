import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function ImageBMI(){
  return(
    <View style={styles.imgContainer}>
        <Image source={require('../assets/meter.png')} style={styles.img}/>
    </View>
  )};


    const styles = StyleSheet.create({
      imgContainer: {
        height:175,
        justifyContent:'center',
        alignItems: 'center',
      },
    
      img: {
        height:'100%',
        resizeMode:'contain',
      },  
      });