import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


export default function Geo(){

    const[lat,setLatitude]=useState(0);
    const[lon,setLongitude]=useState(0);

    function getLocation(){
        Location.getCurrentPosition(
            (pos)=>{setLatitude(pos.coords.latitude); setLongitude(pos.coords.longitude)},
            (error)=>{alert('Error: ' + error.message)},
            {enableHighAccuracy:true, timeout:120000, maximumAge:1000}
        )
    };

    return(
        <View style={styles.container}>
            <Text>Geolocation</Text>
            <TouchableHighlight onPress={getLocation}>
                <Text>Click here to get the location</Text>
            </TouchableHighlight>
            <Text>Latitude: {lat}</Text>
            <Text>Longitude: {lon}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        paddingVertical:30,
        justifyContent:'center',
        alignItems:'center',
    },
});