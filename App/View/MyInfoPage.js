import React, {Component} from 'react';
import {
    StyleSheet,
    ListView,
    TouchableOpacity,
    Text,
    Image,
    ScrollView,
    View,
    Platform,
} from 'react-native'


import Dimensions from 'Dimensions';
import DefautHeader from '../Image/Icons/icon_default_header.png';
import Forward from '../Image/Icons/icon_forward.png';
import TitleNavigator from '../Component/TitleNavigator';
import LogIn from '../View/LogIn';
import ModalLayer from '../Component/ModalLayer';
import DetailInfoPage from '../View/DetailInfoPage';

export default class MyInfoPage extends Component{
	constructor(props){
		super(props);

		this.state = {
			isModalShow:false,
			isReminder:false,
			hasLogin:global.user.loginState,
		}

	}


	_pushToLogIn(){
		// var currentUser = null;
		if (this.state.hasLogin){
			const{navigator} = this.props;
			navigator.push({
				name:'DetailInfoPage',
				component:DetailInfoPage,
				params:{
					title:'个人信息',
					getLoginState:(loginState) => {
						this.setState({hasLogin:loginState});
					}
				}
			})
		}else{
			const{navigator} = this.props;
			navigator.push({
				name:'LogIn',
				component:LogIn,
				params:{
					title:'登录/注册',
					getLoginState:(loginState) => {
						this.setState({hasLogin:loginState});
					}
				}
			})
		}
	}

	_showUserInfo(){
		if (this.state.hasLogin){
			return(
				<Text style={styles.logInStyle}>{global.user.userData.userName}</Text>
			)
		}else{
			return(
				<Text style={styles.logInStyle}>登录体验更多功能</Text>
			)
		}
	}


	_timeHandler() {
	    this.reminderTimer = setTimeout(() => {
	      //卸载BubbleBox组件
	      this.setState({isModalShow:false});
	    }, 2000);
	}

	componentWillUnmount() {
	   //清除计时器
	   this.reminderTimer && clearTimeout(this.reminderTimer);
	}

	render(){
		return(
			<View style={{flex:1, backgroundColor:'#f5f5f5'}}>
				<ModalLayer 
				isVisible={this.state.isModalShow} 
				isReminder={this.state.isReminder} 
				reminderContent={this.state.reminderContent} />
				<TitleNavigator title={this.props.title}/>
				<TouchableOpacity 
					style={styles.myInfoView}
					onPress={()=>{this._pushToLogIn()}}>
					<Image style={styles.headImageStyle} source={DefautHeader}/>
					{this._showUserInfo()}
					<Image style={styles.forwardStyle} source={Forward} />
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	myInfoView:{
		marginTop:0,
		height:80,
		left:0,
		right:0,
		backgroundColor:'#ffffff',
		flexDirection:'row',
	},
	headImageStyle:{
		marginLeft:20,
		height:40,
		width:40,
		borderRadius:20,
		alignSelf:'center',
	},
	logInStyle:{
		marginLeft:20,
		fontSize:16,
		color:'#222222',
		textAlign:'left',
		alignSelf:'center',
	},
	forwardStyle:{
		position:'absolute',
		right:15,
		height:15,
		width:15,
		alignSelf:'center',
	}
})

module.exports = MyInfoPage;