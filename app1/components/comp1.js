import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Comp1(){
    return(
        <View style={styles.container}> 
        <Text style={styles.text1}>My fist App</Text>
        <Text style={styles.text2}>I will create a simple App</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        width: 300,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
    },

    text1: {
        color: '#888',
        fontSize: 20,
    },

    text2: {
        color: '#fff',
        fontSize: 15,
    },
});