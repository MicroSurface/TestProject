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
import {
  Navigator,
} from 'react-native-deprecated-custom-components';

import homePage from './homePage'

var BubbleBox = require('./Component/bubbleBox');

var AccountList = [
  {account: 'zx2013rt@outlook.com', password: '2014'},
  {account: 'zx2017rt@outlook.com', password: '2018'}
];
  


export default class logIn extends Component {
  constructor(props){
      super(props);
      this.state = {hidden: true};
  }

  verifyAccount(){
    let accValue = this.state.textACT; 
    let pwdValue = this.state.textPWD;
    for (var i = 0; i < AccountList.length; i++){
      if( AccountList[i].account == accValue && AccountList[i].password == pwdValue ){
        return true;
      }
    }
  }

  hiddenBubbleBox() {
    if (this.state.hidden) {
      return null;
    }else{
      return <BubbleBox text = "Please enter your account"/>;
    }
  }

  goNextPage(){
    if (this.state.textACT != null && this.state.textPWD != null){
      const {navigator} = this.props;
      if (navigator && this.verifyAccount() == true) {
        navigator.push({
          name: 'homePage',
          component: homePage,
          params: {
            id: this.state.textACT
          }
        });
      }
    }else{
      this.setState({hidden: false});
    }
  }


  render() {
    return(
      <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
        <View style={{backgroundColor: '#f4f4f4', flex: 1}} >
            <Image 
              style={styles.imageIcon}
              source ={require("./Image/iconImage.png")}  />

            <TextInput
              style={styles.userInput}
              placeholder='Your Account'
              onChangeText = {(textACT) => this.setState({textACT})}
              autoFocus={true}
              autoCapitalize='none'
              underlineColorAndroid={'transparent'}
              textAlign='center' />

            <TextInput
              style={styles.pswInput}
              placeholder='Your Password'
              onChangeText = {(textPWD) => this.setState({textPWD})}
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
            <View style={{flex:1, flexDirection:'row',alignItems:'flex-end', bottom:10}}>
              <Text style={styles.register}>Register</Text>
              <Text style={styles.forgetPSW}>Foget password?</Text>
            </View>
        </View>
        {this.hiddenBubbleBox()}
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
  },
  register:{
    marginLeft: 10,
    fontSize: 15,
    color: '#63B8FF',
  },
  forgetPSW:{
    flex: 1,
    textAlign: 'right',
    flexDirection: 'row',
    marginRight: 10,
    fontSize: 15,
    alignItems: 'flex-end',
    color: '#63B8FF',
  }

});
