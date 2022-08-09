import { Text, View } from "react-native";

const doble = n=>n*2;
const sum = (n1,n2)=>n1+n2;

export default function Calcs(){
    return(
        <View>
            <Text style={{ backgroundColor: 'white', marginBottom: 10 }}>{sum(20,40)}</Text>
            <Text style={{ backgroundColor: 'white', marginBottom: 10 }}>{doble(10)}</Text>
        </View>
    )
};