import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Comp2(x){
    return(
        <View style={styles.container}> 
        <Text style={styles.text1}>Section</Text>
        <Text style={styles.text2}>section #{x.number}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#66b3ff',
        width: 125,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 12.5,
    },

    text1: {
        color: '#003366',
        fontSize: 15,
    },

    text2: {
        color: '#f2f2f2',
        fontSize: 11,
    },
});