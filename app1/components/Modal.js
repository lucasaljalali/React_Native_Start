import React,{useState} from 'react';
import {View,Text,Button,Modal,StyleSheet} from 'react-native';


export default function ModalExample(){
    
    const [visible, setVisible] = useState(true);

    return(
        <View>
            <Modal
                visible={visible}
                transparent={true}
                animationType='fade'
            >
                <View style={styles.container}>
                    <Text>Hello Sir, I am a Modal.</Text>
                    <Button title='Close' onPress={()=>{setVisible(false)}} />
                </View>
            </Modal>
            <View style={styles.buttonContainer}>
                <Button title='PRESS FOR MODAL' onPress={()=>{setVisible(true)}} />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#888',
        margin: 15,
        borderRadius: 30,
        elevation: 10,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        
    },

    buttonContainer: {
        marginVertical: 10,
    },
});