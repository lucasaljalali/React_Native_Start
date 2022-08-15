import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
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
            
            <Text style={styles.txt}>Number of flips:</Text>
            <TextInput
                style={styles.txtInput}
                value={String(flips)}
                onChangeText={(value)=>{setFlips(value)}}
            />
            
            <Text style={styles.txt}>Waiting time:</Text>
            <TextInput
                style={styles.txtInput}
                value={String(time)}
                onChangeText={(value)=>{setTime(value)}}
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
        borderRadius:20,
        padding:10,
        marginVertical:20,
        color:'#fc0',
    }, 
});
