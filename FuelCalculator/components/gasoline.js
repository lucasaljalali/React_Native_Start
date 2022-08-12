import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Gasoline(props) {
    return (
        <View style={styles.container}>
            <Text>Insert Gasoline price</Text>
            <TextInput 
                style={styles.txtInput}
                keyboardType='numeric'
                onChangeText={text=>props.onChange(text.replace(/,/g, '.'))}
            />
        </View>
    )};


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
    },
    txtInput:{
        borderColor:'#000',
        borderWidth:2,
        borderRadius:10,
        height:50,
        padding:10,
    },
});