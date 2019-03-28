//import Library
import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';

//Writer components
class App extends React.Component {
    render(){
        return(
            <View>
                <Header title="Albums" />
                <Text>Predapon Aungnaparat........</Text>
            </View>
        );
    }
}

//export
export default App;
