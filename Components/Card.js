import React, {Component} from 'react';
import {View,Text,Image,Button,Dimensions} from 'react-native';
import CardSection from './CardSection';

class Card extends Component{
    render(){
        return(
        <View>
            <CardSection>
                <View>
                    <View style={{margin:5,marginTop:15,flexDirection: 'row'}}>
                            <View style={{ width: 100, height: 100 }}>
                                <Image 
                                    source={{ uri: 'https://goo.gl/YPeqNN' }} 
                                    style={{ width: 100, height: 100 }}
                                />
                            </View>
                            <View style={{margin:10}}>
                                <Text style={styles.text}>  Love Scenario(Return)</Text>
                                <Text style={styles.text}>  iKON</Text></View>
                    </View>
                </View>
            </CardSection>

            <CardSection>
            <View style={styles.button}>
                <Image 
                    source={{ uri: 'https://goo.gl/H6JqJq' }} 
                    style={{ width: 400, height: 350}}/>
            </View>
            </CardSection>

            <CardSection >
                <View style={styles.button}>
                    <View style={{width: 100 }}>
                        <Button 
                            title="BUY NOW" 
                            color= "#910606" />
                    </View>
                </View>
            </CardSection>
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
        fontSize:18
    }
}
export default Card;