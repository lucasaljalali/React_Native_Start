import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';
import Globals from "./globals";


export default function SettingScreen(){
    
    const [flips,setFlips]=useState(Globals.nOfFlips);
    const [time,setTime]=useState(Globals.waitTime);

    function SettingFlips(v){
        Globals.nOfFlips=parseInt(v)
        setFlips(v)
    };

    function SettingTime(v){
        Globals.waitTime=parseInt(v)
        setTime(v)
    };

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.txt}>Number of flips (suggested max. 5):</Text>
            <TextInput
                style={styles.txtInput}
                value={String(flips)}
                onChangeText={(value)=>{SettingFlips(value)}}
            />
            
            <Text style={styles.txt}>Time per flip (suggested max. 1000 ms):</Text>
            <TextInput
                style={styles.txtInput}
                value={String(time)}
                onChangeText={(value)=>{SettingTime(value)}}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:StatusBar.currentHeight,
    },
    
    txt:{
        color:'#fff',
    },
    
    txtInput:{
        borderWidth:1,
        borderColor:'#fff',
        width:'70%',
        borderRadius:20,
        padding:10,
        marginVertical:20,
        color:'#fc0',
    }, 
});
