import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SecondaryBlackButton() {
    return (
        <View style={styles.secondContainer}>
            <Text style={styles.secondTitle}>Novo objeto</Text>
            <Text style={styles.secondSubtitle}>vou criar vários dele</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    secondContainer: {
        width: '75%',
        height: '10%',
        backgroundColor: '#111',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginVertical: 5,
        alignSelf: 'center', 
    },

    secondTitle: {
        fontSize: 20,
        color: '#fff',
    },

    secondSubtitle: {
        color: '#21a21a'
    },
});