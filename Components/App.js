//import Library
import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import Login from './Login';
//Writer components
class App extends React.Component {
    render(){
        return(
            <View>
                <Header title="LOGIN" />
                {/* <Text>.....................................</Text> */}
                {/* <Card /> */}
                <Login /> 
            </View>
        );
    }
}

//export
export default App;
