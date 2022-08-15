import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

  export default function FetchList(){

    const[loading,setLoading]=useState(true);
    const[data,setData]=useState([]);

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
            <FlatList
              data={data}
              keyExtractor={({id},index)=>id}
              renderItem={({item})=>(
                <Text>{item.name}</Text>
              )}
            />
          )
        }
      </View>
    )
  };

  const styles = StyleSheet.create({
    mainContainer: {
      borderWidth:1,
      borderColor:'#fff',
      flex: .75,
      width: '95%',
      backgroundColor: '#999',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical:20,
    },
    txt:{

    }
  });