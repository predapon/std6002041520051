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
        backgroundColor:"#910606",
        paddingHorizontal : 50,
        elevation: 10,
        marginBottom:15
        
    },
    text:{
        fontSize:20,
        color:"#ffffff",
        textAlign:"center",


    }
}
//export
export default Header;