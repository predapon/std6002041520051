import React, {Component} from 'react';
import {View,Text,TextInput,Button,AsyncStorage} from 'react-native';
import axios from 'axios';


class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            name: ''
        }
        // this.onChangeEmail = this.onChangeEmail.bind(this)
        // this.onChangePassword = this.onChangePassword.bind(this)
    }

    async componentDidMount(){
            var tok;
            try{ 
                tok = await AsyncStorage.getItem('token');
                // console.log('Get tok');
                const AuthStr = 'Bearer ' + tok;
                const url = 'http://128.199.240.120:9999/api/auth/me'
                axios.get(url, { 'headers': { 'Authorization': AuthStr } } )
                        .then(res => {
                            // console.log(res.data.data.email)
                            // console.log(res.data.data.name)
                            this.setState(
                                {
                                    email:res.data.data.email,
                                    name:res.data.data.name
                                }
                            )
            });
            }
            catch(error){

            }
    }
    render(){
        return(
            <View >
                <Text style={styles.text}>Profile</Text>
                <Text>Name : {this.state.name}</Text>
                <Text>Email : {this.state.email}</Text>
                
            </View>
        );
    }
}
const styles = {
    button : {
        alignItems : 'center',
        justifyContent : 'center',
        margin : 10

    },
    text : {
        fontSize:20,
    }
}
export default Profile;