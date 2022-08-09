import React, {useState} from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";


export default function(props){
    const [on, setOn] = useState(true);
    const toggleOn = ()=>setOn(!on);
    return(
        <View style={styles.container}>
            <Text>Car: {props.name} - On: {on ? 'Yes' : 'No'}</Text>
            <Button title={on ? 'Turn Off' : 'Turn On'} onPress={()=>{setOn(!on)}} />
            <Switch 
                trackColor={{false: '#777', true:'#8bf'}}
                thumbColor={on ? '#00f' : '#444'}
                value={on}
                onValueChange={toggleOn}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    }
});