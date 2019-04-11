//import Library
import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Profile from './Profile';


//Writer components
class App extends React.Component {
    render(){
        return(
            <View>
                <Header title="LOGIN" />
                {/* <Text>.....................................</Text> */}
                {/* <Card /> */}
                <Login /> 
                {/* <Profile /> */}
            </View>
        );
    }
}

// export
export default App;

