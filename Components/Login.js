import React, {Component} from 'react';
import {View,Text,TextInput,Button,AsyncStorage} from 'react-native';
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
    }

    onChangeEmail(e){
        console.log('onChangeEmail', e)
        this.setState({ email: e})
    }
    onChangePassword(e){
        console.log('onChangePassword', e)
        this.setState({ password: e})
    }
    onPress(){ 
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(res => {
                console.log('login',res.data.data.token)
                AsyncStorage.setItem('token',res.data.data.token)
                console.log("set OK")
            })
    }
    render(){
        return(
            <View >
                <TextInput 
                    style={styles.text}
                    placeholder= "Email..."
                    // onChangeText={(email) => {
                    //                             this.setState({email});
                    //                             console.log(this.state.email);
                    // }}
                    onChangeText ={this.onChangeEmail}
                    value = {this.state.email}
                    
                />
                <TextInput 
                    style={styles.text}
                    secureTextEntry
                    placeholder="password...."
                    onChangeText ={this.onChangePassword}
                    value = {this.state.password}
                />   
                <View style={styles.button}>
                    <View style={{width: 100 }}>
                        <Button 
                            onPress={this.onPress.bind(this)}
                            title="LOGIN" 
                            color= "#910606" />
                    </View>                   
                </View>
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
export default Login;