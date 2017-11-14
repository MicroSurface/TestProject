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
import RegisterService from '../Service/RegisterService';
import ModalLayer from '../Component/ModalLayer';
import Password from '../Image/Icons/icon_password.png';

var AccountList = [
  {account: '1', password: '1'},
  {account: 'zx2017rt@outlook.com', password: '2018'}
];
  
var registerService = new RegisterService();

export default class LogIn extends Component {
  constructor(props){
      super(props);
      this.state = {
        // hidden: true,
        // isEmpty: true,
        // isCorrect: false,
        textACT: '',
        textPWD:'',
        isModalShow:false,
        isReminder:false,
        reminderContent:'',
        hasError:false,
        isLogging:false,
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

  async _loginAction(){
    if (this.state.textACT !== '' && this.state.textPWD !== ''){
      this.setState({
        isModalShow:true, 
        isLogging:true, 
        isReminder:false, 
        hasError:false,
      });
      var postResult = await registerService.postLogin(this.state.textACT, this.state.textPWD);
      if (postResult.status == 200 && postResult.success){
        this.setState({isModalShow:false });
        //登录成功，保存用户信息
        this._saveUserInfo(postResult);
        const {navigator} = this.props;
        if (navigator){
          navigator.pop();
        }
      }else if(postResult.status == 400){
        this.setState({
          isModalShow:true, 
          hasError:postResult.responseData.code,
        });
        this.timeHandler();
      }
    }else{
      let params = '请输入用户名和密码';
      this.setState({
        isModalShow:true, 
        isLogging:false, 
        isReminder:true, 
        reminderContent:params,
      });
      this.timeHandler();
    }
  }

  _saveUserInfo(_postResult){
   storage.save({
      key:'loginState',
      data:{
        userId:_postResult.responseData.objectId,
        userName:_postResult.responseData.username,
        sessionToken:_postResult.responseData.sessionToken,
      },
      expires:null,
    });
    global.user.loginState = true;
    global.user.userData = {
        userId:_postResult.responseData.objectId,
        userName:_postResult.responseData.username,
        sessionToken:_postResult.responseData.sessionToken,
    };
  }

  //--LeanCloud Set Item;
  // var item = new Item();
  // item.set('account', this.state.textACT);
  // item.set('password', this.state.textPWD);
  // item.save().then(function(){
  // }).catch(function(e){
  //   AlertIOS.alert("Save Fail", e.message);
  // })

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
    this.reminderTimer = setTimeout(() => {
      //卸载BubbleBox组件
      this.setState({isModalShow:false});
    }, 2000);
  }

  componentWillUnmount() {
    //清除计时器
    this.reminderTimer && clearTimeout(this.reminderTimer);
  }

  _onTextChange(event){
    this.setState({content:event.nativeEvent.text});
  }


  render() {
    return(
      <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
        <TitleNavigatorWithBack navigator={this.props.navigator} title={this.props.title}/>
        <View style={{backgroundColor: '#f4f4f4', flex: 1}} >
            <View style={{flexDirection:'row',justifyContent:'center', marginTop:0, height:80,left:0,right:0}}>
                <Image style={styles.passwordImageStyle} source={Password} />
                <Text style={styles.titleStyle}>密码登录</Text>
            </View>
            <TextInput
              style={styles.userInput}
              placeholder='输入手机号或用户名'
              onChangeText = {(textACT) => this.setState({textACT})}
              autoCapitalize='none'
              underlineColorAndroid={'transparent'}
              textAlign='center' />

            <TextInput
              style={styles.pswInput}
              placeholder='输入密码'
              onChangeText = {(textPWD) => this.setState({textPWD})}
              secureTextEntry={true}
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
        <ModalLayer 
          isVisible={this.state.isModalShow} 
          isReminder={this.state.isReminder} 
          reminderContent={this.state.reminderContent}
          hasError={this.state.hasError}
          isLogging={this.state.isLogging}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  passwordImageStyle:{
    marginTop:50,
    height:19,
    width:26,
    alignSelf:'center',
  },
  titleStyle:{
    marginLeft:10,
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
