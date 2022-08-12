import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function ResultImg(props) {
    return (
        <View style={styles.container}>
            {
                props.onChange=='' ? <Image source={require('../assets/fuels.jpg')} style={styles.img}/>
                :
                props.onChange == 'G' ? <Image source={require('../assets/gasoline.jpg')} style={styles.img}/>
                :
                <Image source={require('../assets/ethanol.jpg')} style={styles.img}/>
            }
        </View>
    )};


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        height:200,
        resizeMode:"contain",
    }, 
});