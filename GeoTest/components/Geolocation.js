import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableHighlight } from 'react-native';
import Location from 'react-native-geolocation-service';

export default function Geo() {

  const [lat,setLatitude]=useState(0);
  const [lon,setLongitude]=useState(0);

  function getLocation(){
    Location.getCurrentPosition(
      (pos)=>{setLatitude(pos.coords.latitude); setLongitude(pos.coords.longitude)},
      (error)=>{alert('Error: ' + error.message)},
      {enableHighAccuracy:true, timeout:120000, maximumAge:1000}
    )
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={getLocation}>
        <Text>Click here to get location</Text>
      </TouchableHighlight>
      <Text>Latitude: {lat}</Text>
      <Text>Longitude: {lon}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
