import react from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';



export default function ProfileImage(){
    return(
        <ScrollView horizontal={true} style={styles.container}>
            
            <View style={styles.profileContainer}>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/profileImages/201.png')} style={styles.circleImage}/>
                </View>
                <Text style={styles.text}>Nina 1</Text>
            </View> 

            <View style={styles.profileContainer}>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/profileImages/202.png')} style={styles.circleImage}/>
                </View>
                <Text style={styles.text}>Nina 2</Text>
            </View>

            <View style={styles.profileContainer}>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/profileImages/203.png')} style={styles.circleImage}/>
                </View>
                <Text style={styles.text}>Nina 3</Text>
            </View>

            <View style={styles.profileContainer}>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/profileImages/204.png')} style={styles.circleImage}/>
                </View>
                <Text style={styles.text}>Nina 4</Text>
            </View>

            <View style={styles.profileContainer}>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/profileImages/205.png')} style={styles.circleImage}/>
                </View>
                <Text style={styles.text}>Nina 5</Text>
            </View>

            <View style={styles.profileContainer}>
                <View style={styles.circleContainer}>
                    <Image source={require('../assets/profileImages/206.png')} style={styles.circleImage}/>
                </View>
                <Text style={styles.text}>Nina 6</Text>
            </View>
            
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 25,
    },

    profileContainer: {
        height: 95,
        alignItems: 'center',
        marginEnd: 10,
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
        flex: .9,
        resizeMode: 'contain',
    },

    text: {
        color: '#fff',
        fontSize: 10,
    },
});


