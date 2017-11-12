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
import TitleNavigatorWithBack from '../Component/TitleNavigatorWithBack';
import NewUserRegisterPage from '../View/NewUserRegisterPage';

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

  _loginAction(){
    if (this.state.textACT != null && this.state.textPWD != null){
      const {navigator} = this.props;
      if (navigator && this.verifyAccount() == true) {
        // var item = new Item();
        // item.set('account', this.state.textACT);
        // item.set('password', this.state.textPWD);
        // item.save().then(function(){
          navigator.push({
            name: 'TabNavigator',
            component: TabNavigator,
          });
        // }).catch(function(e){
        //   AlertIOS.alert("Save Fail", e.message);
        // })
      }else{
        this.setState({hidden: false, isEmpty: false ,isCorrect: false});
        this.timeHandler();
      }
    }else{
      this.setState({hidden: false, isEmpty: true, isCorrect: true});
      this.timeHandler();
    }
  }

  _registerAction(_type){
    const {navigator} = this.props;
    if (navigator){
      navigator.push({
        name:'NewUserRegisterPage',
        type:_type,
        component: NewUserRegisterPage,
        sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
        params:{
          title:'新用户注册',
        }
      })
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

  _onTextChange(event){
    this.setState({content:event.nativeEvent.text});
  }


  render() {
    return(
      <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
        <TitleNavigatorWithBack navigator={this.props.navigator} title={this.props.title}/>
        <View style={{backgroundColor: '#f4f4f4', flex: 1}} >
            <Text style={styles.titleStyle}>密码登录</Text>
            <TextInput
              style={styles.userInput}
              placeholder='输入手机号或邮箱'
              onChangeText = {(textACT) => this.setState({textACT})}
              autoFocus={true}
              autoCapitalize='none'
              underlineColorAndroid={'transparent'}
              textAlign='center' />

            <TextInput
              style={styles.pswInput}
              placeholder='输入密码'
              onChangeText = {(textPWD) => this.setState({textPWD})}
              autoFocus={false}
              secureTextEntry={true}
              keyboardType='numeric'
              underlineColorAndroid={'transparent'}
              textAlign='center' />

            <TouchableOpacity
              style={styles.loginStyle}
              onPress={()=>this._loginAction()} >
              <Text style={styles.loginTextStyle}>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerStyle}
              onPress={()=>this._registerAction('register')} >
              <Text style={styles.registerTextStyle}>新用户注册</Text>
            </TouchableOpacity>
        </View>
        {this.hiddenBubbleBox()}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  titleStyle:{
    marginTop: 50,
    fontSize:20,
    color:'#222222',
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
  loginStyle:{
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderRadius:5,
    backgroundColor:'#1E90FF',
    justifyContent:'center',
  },
  loginTextStyle:{
    color: '#ffffff', 
    fontSize: 18, 
    textAlign: 'center',
    alignSelf:'center',
  },
  registerStyle:{
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    borderRadius:5,
    backgroundColor:'#00BFFF',
    justifyContent:'center',
  },
  registerTextStyle:{
    color: '#ffffff', 
    fontSize: 18, 
    textAlign: 'center',
    alignSelf:'center',
  },

});
