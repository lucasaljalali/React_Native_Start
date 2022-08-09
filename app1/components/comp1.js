import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Comp1(){
    return(
        <View style={styles.container}> 
            <Image source={require('../assets/logo.png')} style={styles.logoImage}/>
            <View style={styles.textContainer}>    
                <Text style={styles.text1}>My fist App</Text>
                <Text style={styles.text2}>I will create a simple App</Text>
            </View>    
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#333',
        width: '80%',
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },

    logoImage: {
        resizeMode: 'contain', 
        height: 35,
        width: 35,
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
    },

    text1: {
        color: '#888',
        fontSize: 13,
    },

    text2: {
        color: '#fff',
        fontSize: 11,
    },
});