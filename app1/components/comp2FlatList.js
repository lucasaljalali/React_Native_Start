import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";

const products = [
    {
        id: '1',
        desc: ['Mouse', 'Black']
    },

    {
        id: '2',
        desc: ['Keyboard', 'Orange']
    },

    {
        id: '3',
        desc: ['Monitor', 'Blue']
    },
    
    {
        id: '4',
        desc: ['Glass', 'Transparent']
    },

    {
        id: '5',
        desc: ['T-Shirt', 'Yellow']
    },

    {
        id: '6',
        desc: ['Hat', 'Gray']
    },

    {
        id: '7',
        desc: ['Car', 'Silver']
    },

    {
        id: '8',
        desc: ['Bus', 'Gold']
    },
]


export default function Comp2FlatList(){
    
    const [refreshing, setRefreshing] = useState(false);
    const OnRefresh = ()=>{
            setRefreshing(true); 
            //here should be everything I want to do when refreshing
            setTimeout(()=>{setRefreshing(false)}, 1500);
            //instead of setTimeout I can put "setRefreshing(false)"
        };
    
    return(
        <View style={styles.mainContainer}>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={OnRefresh}/>}
                scrollEnabled={true}
                numColumns={2}
                data={products}
                keyExtractor={item=>item.id}
                renderItem={({item})=> 
                        <View style={styles.secondaryContainer}>
                            <Text style={styles.text1}>Product: {item.desc[0]}</Text>
                            <Text style={styles.text2}>Color: {item.desc[1]}</Text>
                        </View>
                }
            />
        </View>
    )
};


const styles = StyleSheet.create({
    mainContainer: {
        width: '90%',
        height: 120,
        alignItems: 'center',       
        overflow: 'hidden',
    },

    secondaryContainer: {
        backgroundColor: '#66b3ff',
        width: 150,
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 12.5,
    },

    text1: {
        color: '#003366',
        fontSize: 13,
    },

    text2: {
        color: '#f2f2f2',
        fontSize: 11,
    },
});