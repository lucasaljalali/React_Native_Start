import React, {useState} from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function(props){
    const [on, setOn] = useState(true);
    return(
        <View style={styles.container}>
            <Text>Car: {props.name} - On: {on ? 'Yes' : 'No'}</Text>
            <Button title={on ? 'Turn Off' : 'Turn On'} onPress={()=>{setOn(!on)}} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    }
});