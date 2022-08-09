import React, {useState} from "react";
import { View, Text, TextInput } from "react-native";


export default function InputName(){
    const [name, setName] = useState("");
    
    return(
        <View>
            <Text style={{color:'#fff',}}>Type your name:</Text>
            <TextInput 
                value={name}
                onChangeText={text=>setName(text)}
                autoCapitalize='words'
                multiline= {false}
                style={{borderWidth:1 , borderColor:'#fff', marginVertical:5, color:'#fff', paddingHorizontal:5,}}
            />
            <Text style={{marginVertical:5, color:'#fff',}}>Name typed: {name}</Text>
        </View>
    );
};