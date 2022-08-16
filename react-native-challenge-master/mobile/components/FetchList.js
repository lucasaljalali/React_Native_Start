import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions, Switch, Button } from 'react-native';

  export default function FetchList(){

    const {width, height} = Dimensions.get('window');

    const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);

    const[NotUS,setNotUS]=useState(false);
    const supportUS = data.filter((item) => item.isSupportedInUS === true);

    const[NotTestMode,setNotTestMode]=useState(false);
    const supportTestMode = data.filter((item) => item.supportsTestMode === true);

    const supportUSandTestMode = data.filter((item)=> item.isSupportedInUS === true && item.supportsTestMode == true);
    
    const filteredData =()=>{
      if(NotUS == false && NotTestMode == false){return supportUSandTestMode};
      if(NotUS == true && NotTestMode == false){return supportTestMode};
      if(NotUS == false && NotTestMode == true){return supportUS};
      if(NotUS == true && NotTestMode == true){return data};
    };

    const [selectedBtn, setSelectedBtn] = useState(undefined);

    const sortedFilteredData =()=>{
      let localData=filteredData();
      console.log(selectedBtn)
      if(selectedBtn == 1){return localData.sort((a, b) => a.name.localeCompare(b.name))}
      if(selectedBtn == 2){return localData.sort((a, b) => a.code.localeCompare(b.code))}
      if(selectedBtn == 3){return localData.sort(() => Math.random() - 0.5) }
      return filteredData();
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
              data={sortedFilteredData()}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => (
                <Text style={styles.txt}>{item.name} - {item.code}</Text>
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
                <View style={styles.buttonsContainer}>
                  <Text>Sort:</Text>
                  <Button title="A-Z" onPress={()=>setSelectedBtn(1)} />
                  <Button title="by symbol" onPress={()=>setSelectedBtn(2)} />
                  <Button title="randomly" onPress={()=>setSelectedBtn(3)} />
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
      fontSize: 12,
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

    buttonsContainer:{
      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
  });