import { View, Button, Alert } from "react-native";

const errorMsg = ()=>{Alert.alert('Error', 'This is a error message')}

export default function ErrorBtn(){
    return(
        <View>
            <Button title='Press for Error' color='red' onPress={errorMsg}/>
        </View>
    )
}; 