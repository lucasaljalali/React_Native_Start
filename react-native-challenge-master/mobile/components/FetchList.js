import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions, Switch } from 'react-native';

  export default function FetchList(){

    const {width, height} = Dimensions.get('window');

    const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);
    
    const[NotUS,setNotUS]=useState(false);
    const supportUS = data.filter((item) => item.isSupportedInUS === true);

    const[NotTestMode,setNotTestMode]=useState(false);
    const supportTestMode = data.filter((item) => item.supportsTestMode === true);

    const supportUSandTestMode = data.filter((item)=> item.isSupportedInUS === true && item.supportsTestMode == true);
    console.log(supportUSandTestMode)
    const RenderData =()=>{
      if(NotUS == false && NotTestMode == false){return supportUSandTestMode};
      if(NotUS == true && NotTestMode == false){return supportTestMode};
      if(NotUS == false && NotTestMode == true){return supportUS};
      return data;
    };

    useEffect(()=>{
        fetch('https://api.moonpay.com/v3/currencies')
          .then((res)=>res.json())
          .then((json)=>setData(json))
          .catch(()=>(alert('error: data not found')))
          .finally(()=>setLoading(false))
      },[]
    );

    return(
      <View style={styles.mainContainer}>
        {
          loading ? <ActivityIndicator/> : (
            <><FlatList
              style={styles.list}
              numColumns={(width < 768 ? 1 : 2)}
              columnWrapperStyle={(width < 768 ? null : { justifyContent: 'space-between' })}
              data={RenderData()}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <Text style={styles.txt}>{item.name}</Text>
              )}/>
              <View style={styles.switchesContainer}>
                <View style={styles.switchContainer}>
                  <Text>Not supported in US</Text>
                  <Switch
                    trackColor={{false: '#777', true:'#8bf'}}
                    thumbColor={ NotUS == true ? '#00f' : '#444' }
                    value={NotUS}
                    onValueChange={()=>setNotUS(!NotUS)} />
                </View>
                <View style={styles.switchContainer}>
                  <Text>Not available in test mode</Text>
                  <Switch
                    trackColor={{false: '#777', true:'#8bf'}}
                    thumbColor={ NotTestMode == true ? '#00f' : '#444' }
                    value={NotTestMode}
                    onValueChange={()=>setNotTestMode(!NotTestMode)} />
                </View> 
              </View></>
          )
        }
      </View>
    )
  };

  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      width: '95%',
      backgroundColor: '#999',
      marginTop:20,
      alignItems: 'center',
      justifyContent:'center',
    },

    txt:{
      minWidth:'45%',
      fontSize: 13,
    },

    switchesContainer: {
      width: '95%',
      alignItems:'flex-start',
      padding: 20,
      borderTopColor:'#777',
      borderTopWidth:1,
    },

    switchContainer:{
      flexDirection:'row',
      alignItems:'center',  
    },
  });