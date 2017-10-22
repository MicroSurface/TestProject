/**
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
  Modal,
  Button,
  TouchableOpacity,
  AlertIOS,
} from 'react-native';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';

import AV from 'leancloud-storage';
var Item = AV.Object.extend('Item');

import HomePage from './HomePage'
import BubbleBox from '../Component/BubbleBox';
import TabNavigator from '../Component/TabNavigator';

var AccountList = [
  {account: '1', password: '1'},
  {account: 'zx2017rt@outlook.com', password: '2018'}
];
  

export default class LogIn extends Component {
  constructor(props){
      super(props);
      this.state = {
        hidden: true,
        isEmpty: true,
        isCorrect: false,
        textACT: '',
        textPWD:''
      };
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

  goNextPage(){
    if (this.state.textACT != null && this.state.textPWD != null){
      const {navigator} = this.props;
      if (navigator && this.verifyAccount() == true) {
        var item = new Item();
        item.set('account', this.state.textACT);
        item.set('password', this.state.textPWD);
        item.save().then(function(){
          navigator.push({
            name: 'TabNavigator',
            component: TabNavigator,
          });
        }).catch(function(e){
          AlertIOS.alert("Save Fail", e.message);
        })
      }else{
        this.setState({hidden: false, isEmpty: false ,isCorrect: false});
        this.timeHandler();
      }
    }else{
      this.setState({hidden: false, isEmpty: true, isCorrect: true});
      this.timeHandler();
    }
  }

  hiddenBubbleBox() {
    if (this.state.hidden) {
      return null;
    }else{
      if (this.state.isEmpty){
        return <BubbleBox test="Please enter your account" />
      }
      if (!this.state.isCorrect) {
        return <BubbleBox test="Invalid password" />
      }
    }
  }

  timeHandler() {
    this.logInTimer = setTimeout(() => {
      //卸载BubbleBox组件
      this.setState({hidden: true});
    }, 2000);
  }

  componentWillUnmount() {
    //清除计时器
    this.logInTimer && clearTimeout(this.logInTimer);
  }


  render() {
    return(
      <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
        <View style={{backgroundColor: '#f4f4f4', flex: 1}} >
            <Image 
              style={styles.imageIcon}
              source ={require("../Image/iconImage.png")}  />

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

});
