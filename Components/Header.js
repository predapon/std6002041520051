//import lib
import React, {Component} from 'react';
import {View,Text} from 'react-native';

//creat components
class Header extends Component{
    render(){
        return(
        <View style={styles.header}>
            <Text style={styles.text} >{this.props.title}</Text>
        
          
        </View>
        );
    }
}
//style
const styles = {
    header: {
        padding: 15,
        backgroundColor:"#F1CE33"
        
    },
    text:{
        fontSize:20,
        color:"#000000",
        textAlign:"center",


    }
}
//export
export default Header;