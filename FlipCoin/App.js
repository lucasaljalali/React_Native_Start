import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  
  const coins=[
    require('./images/1.png'),
    require('./images/5.png'),
    require('./images/1.png'),
    require('./images/2.png'),
    require('./images/3.png'),
    require('./images/4.png'),
    require('./images/5.png'),
    require('./images/6.png'),
    require('./images/7.png'),
    require('./images/8.png'),
  ];

  let iCoin=0;
  const maxRotations=10;
  const [currentCoin,setCurrentCoin]=useState(coins[iCoin]);

  async function waiting (tmp){
    function time(ms){
      return new Promise(resolve=>setTimeout(resolve,ms))
    }
    await time(tmp)
  };

  async function flipCoin(){
    iCoin=2;
    for(let i=0; i<(maxRotations*8); i++){
      iCoin++
      if(iCoin>9){
        iCoin=2
      }
      setCurrentCoin(coins[iCoin])
      await waiting(20)
    };
    let res=Math.floor(Math.random()*10)+1;
    (res<=5 ? res=0 : res=1);
    setCurrentCoin(coins[res]);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <Text>Flip a Coin!</Text>
      <Image source={currentCoin} style={styles.coin}/>
      <Button title='  FLIP  ' onPress={()=>{flipCoin()}} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:StatusBar.currentHeight,
    marginHorizontal: 20,
  },

  coin:{
    height:200,
    resizeMode:'contain',
    marginVertical: 50,
  },
});
