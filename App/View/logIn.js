/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import firstPage from './firstPage'



export default class logIn extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  goNextPage(){
    const {navigator} = this.props;
    if (navigator) {
      navigator.push({
        name: 'firstPage',
        component: firstPage,
      })
    }
  }


  render() {
    return(
      <View style={{backgroundColor: '#f4f4f4', flex: 1}} >
         
          <Image 
            style={styles.imageIcon}
            source ={require("./Image/iconImage.png")}  />

          <TextInput
            style={styles.userInput}
            placeholder='Your Account'
            autoFocus={true}
            autoCapitalize='none'
            underlineColorAndroid={'transparent'}
            textAlign='center' />

          <TextInput
            style={styles.pswInput}
            placeholder='Your Password'
            autoFocus={false}
            secureTextEntry={true}
            keyboardType='numeric'
            underlineColorAndroid={'transparent'}
            textAlign='center' />

          <TouchableOpacity
            style={styles.login}
            onPress={()=>this.goNextPage()} >
            <Text style={{color: '#ff0000', fontSize: 20, textAlign: 'center'}}>Login</Text>
          </TouchableOpacity>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  imageIcon:{
    marginTop: 50,
    width: 63,
    height: 56,
    alignSelf: 'center',
  },
  userInput:{
    backgroundColor: '#ffffff',
    marginTop: 30,
    height: 50,
  },
  pswInput:{
    backgroundColor: '#ffffff',
    marginTop: 2,
    height: 50,
  },
  login:{
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 90,
  }

});
