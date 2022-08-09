import React, {Component} from "react";
import { View, Text, Button } from "react-native";


export default class Car extends Component {
    state={on:true};
    render(props){
        return(
            <View>
                <Text>Car: {this.props.name} - On: {this.state.on ? 'Yes' : 'No'}</Text>
                <Button title={this.state.on ? 'Turn Off' : 'Turn On'} 
                        onPress={()=>{this.setState({on:!this.state.on})}} />
            </View>
        )
    }
    
};