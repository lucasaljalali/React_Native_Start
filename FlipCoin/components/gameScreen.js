import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import Globals from "./globals";


export default function GameScreen() {
  
  const coins=[
    require('../images/1.png'),
    require('../images/5.png'),
    require('../images/1.png'),
    require('../images/2.png'),
    require('../images/3.png'),
    require('../images/4.png'),
    require('../images/5.png'),
    require('../images/6.png'),
    require('../images/7.png'),
    require('../images/8.png'),
  ];

  let iCoin=0;
  const [currentCoin,setCurrentCoin]=useState(coins[iCoin]);  

  async function waiting (tmp){
    function time(ms){
      return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await time(tmp)
  };

  async function flipCoin(){
    
    let maxFlips=Globals.nOfFlips;
    let timeOfFlips=Globals.waitTime;
    iCoin=2;

    for(let i=0; i<(maxFlips*8); i++){
      iCoin++
      if(iCoin>9){
        iCoin=2
      }
      setCurrentCoin(coins[iCoin])
      await waiting((timeOfFlips/8) > 50 ? (timeOfFlips/8) : 50)
    };
    let res=Math.floor(Math.random()*10)+1;
    (res<=5 ? res=0 : res=1);
    setCurrentCoin(coins[res]);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{Globals.title}</Text>
      <Image source={currentCoin} style={styles.coin}/>
      <TouchableHighlight
        style={styles.btn}
        onPress={()=>{flipCoin()}}
      >
        <Text style={styles.btnTxt}>FLIP</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight,
  },
  
  title:{
    padding:20,
    fontSize:30,
    color:'#fc0',
  },

  coin:{
    height:200,
    resizeMode:'contain',
    marginVertical: 50,
  },

  btn:{
    backgroundColor:'#fc0',
    padding:15,
    width:'50%',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },

  btnTxt:{
    color:'#444',
    fontSize:20,
  },
});
