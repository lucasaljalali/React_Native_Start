import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Result(props) {
    return (
        <View style={styles.container}>
            <Text>Best choice: {props.onChange}</Text>
        </View>
    )};


const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
    },
});