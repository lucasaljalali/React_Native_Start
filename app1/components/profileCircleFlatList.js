import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const users = [
    {
        id: '1',
        name: 'Banana',
        lastName: 'mnnmmna',
        img: require('../assets/profileImages/201.png'),
    },

    {
        id: '2',
        name: 'Sapeca',
        lastName: 'agagaga',
        img: require('../assets/profileImages/202.png'),
    },

    {
        id: '3',
        name: 'Levada',
        lastName: 'uiahsiuh',
        img: require('../assets/profileImages/203.png'),
    },
    
    {
        id: '4',
        name: 'Da Breca',
        lastName: 'llllll',
        img: require('../assets/profileImages/204.png'),
    },

    {
        id: '5',
        name: 'Nina',
        lastName: 'huihu',
        img: require('../assets/profileImages/205.png'),
    },
    
    {
        id: '6',
        name: 'Al Jalali',
        lastName: 'algum',
        img: require('../assets/profileImages/206.png'),
    },

    {
        id: '7',
        name: 'Lucas',
        lastName: 'algum',
        img: require('../assets/profileImages/101.png'),
    },

    {
        id: '8',
        name: 'Outro Lucas',
        lastName: 'algum',
        img: require('../assets/profileImages/102.png'),
    },
]



    export default function ProfileCircleFlatList(){
    return(
        <View style={styles.mainContainer}>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={users}
                renderItem={({item})=> 
                    
                    <View style={styles.secondaryContainer}>
                        <View style={styles.circleContainer}>
                            <Image style={styles.circleImage} source={item.img}/>
                        </View>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                }
            />
        </View>
    )
};



const styles = StyleSheet.create({
    
    mainContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',        
    },

    secondaryContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10,
        marginVertical: 15,
    },

    circleContainer: {
        height: 75,
        width: 75,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    circleImage: {
        width: '90%',
        backgroundColor: 'purple',
        borderRadius: 1000,
        flex: .9,
        resizeMode: 'contain',
    },

    text: {
        color: '#fff',
        fontSize: 10,
    },
});


