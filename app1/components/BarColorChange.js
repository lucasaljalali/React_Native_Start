import React, {useState} from 'react';
import { View, Button, StyleSheet } from 'react-native';


export default function BarColorChange(){
    const [color, setColor] = useState('gray');

    return(    
        <View style={styles.buttonsContainer}>
            <Button title={'Red Status Bar'} color={'red'} onPress={()=>setColor('red')}/>
            <Button title={'Gray Status Bar'} color={'gray'} onPress={()=>setColor('gray')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent: 'space-evenly',
        width: '90%',
    },
});