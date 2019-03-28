//import lib
import React, {Component} from 'react';
// import React from 'react';
import {View,Text} from 'react-native';

//creat components
class Header extends Component{
    render(){
        return(
        <View>
            <Text>{this.props.title}</Text>
        </View>
        );
    }
}
//export
export default Header;