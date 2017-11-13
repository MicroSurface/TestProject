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
import ModalLayer from '../Component/ModalLayer';

var regiserService = new RegisterService();

export default class NewUserRegisterPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      userName:'',
      phoneNumber:'',
      password:'',
      isShow:false,
      isCompleteRegister:false,
      hasError:false,
      isRegistering:false,
    }

  }

  async _postNewUser(_userName,_mobilePhone, _password){
    this.setState({isShow:true, isRegistering:true});
    var postResult = await regiserService.postNewUser(_userName, _mobilePhone, _password);
    if (postResult.status == 201 && postResult.success){
      this.setState({isCompleteRegister:true});
      const {navigator} = this.props;
      //延时2秒返回前一页
      this.timer = setTimeout(() => {
       navigator.pop();
        }, 2000
      );
    }else if (postResult.status == 400){
      this.setState({hasError:postResult.responseData.code});
      this.hiddenTimer = setTimeout(() => {
        this.setState({isShow:false});
        }, 2000
      );
    }
  }

  componentWillUnmount() {
    //卸载该页面时清除计时器
    this.timer && clearTimeout(this.timer);
    this.hiddenTimer && clearTimeout(this.hiddenTimer);
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
        <ModalLayer 
          isVisible={this.state.isShow} 
          isRegistering={this.state.isRegistering} 
          isComplete={this.state.isCompleteRegister} 
          hasError={this.state.hasError}/>
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