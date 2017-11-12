import React, {Component} from 'React';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import TitleNavigatorWithClose from '../Component/TitleNavigatorWithClose';
import RegisterService from '../Service/RegisterService';
import MyInfoPage from '../View/MyInfoPage';

var regiserService = new RegisterService();

export default class NewUserRegisterPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName:'',
      phoneNumber:'',
      password:'',
    }

  }

  async _postNewUser(_userName,_mobilePhone, _password){
    var postResult = await regiserService.postNewUser(_userName, _mobilePhone, _password);
    if (postResult.status == 201 && postResult.success){
      console.log('this is result:'+postResult);
      const {navigator} = this.props;
      if (navigator){
        navigator.popToRoute({component:MyInfoPage});
      }
    }
  }

  _popToRoute(){
    const {navigator} = this.props;
    if (navigator){
      navigator.popToRoute({component:MyInfoPage});
    }
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
        <TitleNavigatorWithClose navigator={this.props.navigator} title='新用户注册' />
        <Text style={styles.titleStyle}>手机号快速注册</Text>
        <TextInput 
          style={styles.phoneNumberStyle}
          placeholder={'输入您的用户名'}
          onChangeText = {(userName) => this.setState({userName})}
          autoCapitalize='none'
          underlineColorAndroid={'transparent'}
          textAlign='center'/>
        <TextInput 
          style={styles.passwordStyle}
          placeholder={'输入您的手机号'}
          onChangeText = {(phoneNumber) => this.setState({phoneNumber})}
          autoCapitalize={'none'}
          keyboardType={'numeric'}
          underlineColorAndroid={'transparent'}
          textAlign={'center'}/>
        <TextInput 
          style={styles.passwordStyle}
          placeholder={'输入您的密码'}
          onChangeText = {(password) => this.setState({password})}
          secureTextEntry={true}
          autoCapitalize={'none'}
          underlineColorAndroid={'transparent'}
          textAlign={'center'}/>
          <TouchableOpacity 
          style={styles.registerBtnStyle}
          onPress={() => this._postNewUser(this.state.userName, this.state.phoneNumber, this.state.password)}>
            <Text style={styles.registerTxtStyle}>注册</Text>
          </TouchableOpacity>
        </View>        
    )
  }
}

const styles = StyleSheet.create({
  titleStyle:{
    marginTop:50,
    alignSelf:'center',
    fontSize:20,
    color:'#222222',
  },
  phoneNumberStyle:{
    marginTop:30,
    height:50,
    backgroundColor:'#ffffff',
  },
  passwordStyle:{
    marginTop:3,
    height:50,
    backgroundColor:'#ffffff',
  },
  registerBtnStyle:{
    marginTop:20,
    marginLeft:50,
    marginRight:50,
    height:40,
    borderRadius:5,
    backgroundColor:'#1E90FF',
    justifyContent:'center',
  },
  registerTxtStyle:{
    fontSize:18,
    color:'#ffffff',
    textAlign:'center',
  }
})

module.exports = NewUserRegisterPage;