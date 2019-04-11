import React, {Component} from 'react';
import {View,Text,TextInput,Button,AsyncStorage,ActivityIndicator} from 'react-native';
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
    static navigationOptions = {
        title: 'Profile',
      };
    async logout(){
        await AsyncStorage.setItem('token','')
        this.props.navigation.push('Login')
    }
    async componentDidMount(){
        const url = 'http://128.199.240.120:9999/api/auth/me'
        const token = await AsyncStorage.getItem('token');
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2E1YWZkMzE5OGUwMDA4NDcyZGRlMzkiLCJpYXQiOjE1NTQ5Njk2NTB9.mTNcBpzobWbMMnRbxrbbOpzu4M6OLrA7QbkPorTFy3M'
        const config = { 
                            headers: { 
                                accept: '*/*',
                                Authorization: 'Bearer ' + token
                            }
                        }

        axios.get(url,config)
             .then(res => {
                console.log(res.data.data.email)
                console.log(res.data.data.name)
                this.setState(
                    {
                        email:res.data.data.email,
                        name:res.data.data.name
                    }
                )
             })
             .catch(err => {
                console.log(err);
             })


            // var tok;
            // try{ 
            //     tok = await AsyncStorage.getItem('token');
            //     // console.log('Get tok');
            //     const AuthStr = 'Bearer ' + tok;
            //     const url = 'http://128.199.240.120:9999/api/auth/me'
            //     axios.get(url, { 'headers': { 'Authorization': AuthStr } } )
            //             .then(res => {
            //                 // console.log(res.data.data.email)
            //                 // console.log(res.data.data.name)
            //                 this.setState(
            //                     {
            //                         email:res.data.data.email,
            //                         name:res.data.data.name
            //                     }
            //                 )
            // });
            // }
            // catch(error){

            // }
    }
    render(){
        if(this.state.name == ''){
             //do someting
            return <View style={styles.view}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
             
        }
        return(
            <View >
                {/* <Text style={styles.text}>Profile</Text> */}
                <Text style={styles.text} >Name : {this.state.name}</Text>
                <Text style={styles.text} >Email : {this.state.email}</Text>
                <View style={styles.button}>
                    <View style={{width: 100 }}>
                        <Button 
                            onPress={this.logout.bind(this)}
                            title="LOGOUT" 
                            color= "#910606" />
                    </View>                   
                </View>
            </View>
        );
    }
}
const styles = {
    view: {
        justifyContent : 'center',
        margin : 10
    },
    button : {
        alignItems : 'center',
        justifyContent : 'center',
        margin : 10

    },
    text : {
        fontSize:18,
        margin : 10
    }
}
export default Profile;