import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function BtnCalc(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.btn}
                onPress={props.onChange}
            >
            <Text style={styles.txtBtn}>Calculate</Text>
            </TouchableOpacity>
        </View>
    )};


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
    },
    btn:{
        backgroundColor:'#800',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        height:50,
    },
    txtBtn:{
        textTransform:'uppercase',
        color:'#fff',
    },
});