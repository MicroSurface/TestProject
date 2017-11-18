import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View,
    Platform,
    Modal,
} from 'react-native'


import Dimensions from 'Dimensions';
import DefautHeader from '../Image/Icons/icon_default_header.png';
import Forward from '../Image/Icons/icon_forward.png';
import TitleNavigatorWithBack from '../Component/TitleNavigatorWithBack';
import ImagePicker from 'react-native-image-crop-picker';
// import ModalDrawer from '../Component/ModalDrawer';

export default class DetailInfoPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			isModalShow:false,
		}
	}

	_logout(){
		storage.remove({
			key:'loginState',
		}).then(()=>{
			
		});
		global.user.loginState = false;
		global.user.userData = '';
		this.props.getLoginState(global.user.loginState);
		const {navigator} = this.props;
		if (navigator){
			navigator.pop();
		}
	}

	_chooseImages(){
		ImagePicker.openPicker({
			width:30,
			height:40,
			cropping:true,
		}).then(image => {
			console.log('this is image:'+image);
		}).catch(e => {
			return;
		});

		//清理临时文件
		ImagePicker.clean().then(() => { 
	       	console.log('removed all tmp images from tmp directory');
	  	}).catch(e => { 
	      return;
	  	});
	}

	render(){
		return(
			<View style={styles.container}>
				<Modal
					animationType={'slide'}
		          	transparent={true}
		          	visible={this.state.isModalShow}>
		          	<View style={styles.modalStyle}>
		          		<TouchableOpacity 
			          		style={styles.optionStyle}
			          		onPress={() => {}}>
			          		<Text style={styles.optionTxtStyle}>拍照</Text>
		          		</TouchableOpacity>
		          		<TouchableOpacity 
			          		style={styles.cancelStyle}
			          		onPress={() => {this._chooseImages()}}>
			          		<Text style={styles.optionTxtStyle}>本地相册</Text>
		          		</TouchableOpacity>
		          		<TouchableOpacity 
			          		style={styles.cancelStyle}
			          		onPress={() => {this.setState({isModalShow:false})}}>
			          		<Text style={styles.cancelTxtStyle}>取消</Text>
		          		</TouchableOpacity>
		          	</View>
				</Modal>
				<TitleNavigatorWithBack navigator={this.props.navigator} title={this.props.title}/>
				<TouchableOpacity 
					style={styles.headImageViewStyle}
					onPress={() => {this.setState({isModalShow:true})}}>
					<Text style={styles.headTxtStyle}>我的头像</Text>
					<Image style={styles.headImageStyle} source={DefautHeader} />
					<Image style={styles.forwardStyle} source={Forward} />
				</TouchableOpacity>
				<View style={{backgroundColor:'#dfdfdf', height:1, marginLeft:0, marginRight:0}}/>
				<TouchableOpacity 
					style={styles.logoutStyle}
					onPress={()=>this._logout()}>
					<Text style={styles.logoutTxtStyle}>退出登录</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#f5f5f5',
	},
	headImageViewStyle:{
		marginTop:0,
		height:80,
		left:0,
		right:0,
		backgroundColor:'#ffffff',
		flexDirection:'row',
	},
	logoutStyle:{
		marginTop:0,
		height:40,
		left:0,
		right:0,
		backgroundColor:'#ffffff',
		flexDirection:'row',
		justifyContent:'center',
	},
	logoutTxtStyle:{
		fontSize:15,
		color:'#ff0000',
		alignSelf:'center',
		textAlign:'center',
	},
	headTxtStyle:{
		marginLeft:15,
		fontSize:15,
		color:'#222222',
		alignSelf:'center',
		textAlign:'left',
	},
	headImageStyle:{
		position:'absolute',
		right:40,
		height:40,
		width:40,
		borderRadius:20,
		alignSelf:'center',
	},
	forwardStyle:{
		position:'absolute',
		right:15,
		height:15,
		width:15,
		alignSelf:'center',
	},
	modalStyle:{
		position:'absolute',
		top:0,
		bottom:0,
		left:0,
		right:0,
		backgroundColor:'rgba(0,0,0,0.5)',
		flexDirection:'column',
		justifyContent:'flex-end',
	},
	optionStyle:{
		marginBottom:5,
		marginLeft:50,
		marginRight:50,
		height:50,
		borderRadius:5,
		backgroundColor:'#ffffff',
		justifyContent:'center',
	},
	optionTxtStyle:{
		fontSize:18, 
		color:'#1E90FF',
		alignSelf:'center',
		textAlign:'center',
	},
	cancelStyle:{
		marginBottom:10,
		marginLeft:50,
		marginRight:50,
		height:50,
		borderRadius:5,
		backgroundColor:'#ffffff',
		justifyContent:'center',
	},
	cancelTxtStyle:{
		fontSize:18, 
		color:'#ff0000',
		alignSelf:'center',
		textAlign:'center',
	}
})

module.exports = DetailInfoPage;