import react, { useCallback, useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";


export default function Touchable() {

    const [counter, setCounter] = useState(0);
    const AddCounter = ()=>{setCounter(counter+1)};

    return(
        <View style={{flexDirection:'row', borderColor:'#fff', borderWidth:1, marginVertical:5}}>
            <View>
                <TouchableHighlight
                    onPress={AddCounter}
                    underlayColor={'#fff'}
                    style={{backgroundColor:'#444'}}
                >
                    <Text>Press to Count: </Text>
                </TouchableHighlight>
            </View> 
            <View>
                <TouchableOpacity
                    onPress={AddCounter}
                    style={{backgroundColor:'#fff'}}
                >
                    <Text>Press to Count: </Text>
                </TouchableOpacity>
            </View>
            <Text style={{backgroundColor:'#999'}}>{counter}</Text>
        </View>
    )
};
