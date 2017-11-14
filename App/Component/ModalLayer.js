import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    Text,
    View,
    Image,
    Modal,
} from 'react-native';

import CompleteIcon from '../Image/Icons/icon_complete.png';
import WrongIcon from '../Image/Icons/icon_wrong.png';
import ReminderIcon from '../Image/Icons/icon_reminder.png';

export default class ModalLayer extends Component {
	constructor(props){
		super(props);
		this.state = {
			isModal:true,
		}
	}

	_showIndicators(){
		if(this.props.isComplete){
			return(
				<Image style={styles.completeStyle} source={CompleteIcon} />
			)
		}else if(this.props.isReminder){
			return(
				<Image style={styles.completeStyle} source={ReminderIcon} />
			)
		}else if(this.props.hasError){
			return(
				<Image style={styles.completeStyle} source={WrongIcon} />
			)
		}else if(this.props.isRegistering || this.props.isLogging){
			return(
				<ActivityIndicator color={'#ffffff'} style={styles.indicatorStyle} />
			)
		}
	}
		

	_showStatus(){
		if(this.props.isComplete){
			let params = '注册完成';
			return params;
		}else if(this.props.isReminder){
			let params = this.props.reminderContent;
			return params;
		}else if (this.props.hasError){
			if (this.props.hasError == 214){
				let params = '该手机号已注册';
				return params;
			}else if (this.props.hasError == 127 ){
				let params = '无效的手机号码';
				return params;
			}else if (this.props.hasError == 218 ){
				let params = '请填写密码';
				return params;
			}else if (this.props.hasError == 202 ){
				let params = '该用户名已注册';
				return params;
			}else if(this.props.hasError == 211){
				let params = '该用户未注册';
				return params;
			}else if (this.props.hasError == 210){
				let params = '密码错误';
				return params;
			}
		}else if(this.props.isRegistering){
			let params = '注册中...';
			return params;
		}else if(this.props.isLogging){
			let params = '登录中...';
			return params;
		}
	}

	_onRequestClose(){
		this.setState({isModal:false});
	}

	render(){
		return(
			<Modal
				animationType={'none'}
	          	transparent={true}
	          	visible={this.props.isVisible}
	          	onRequestClose={() => {this._onRequestClose()}}>
	          	<View style={styles.modalStyle}>
	          		{this._showIndicators()}
	          		<Text style={styles.modalTxtStyle}>{this._showStatus()}</Text>
	          	</View>
			</Modal>
		)
	}
}


const styles = StyleSheet.create({
	modalStyle:{
		flex:1,
		padding:10,
		position:'absolute',
		bottom:100,
		borderRadius:5,
		backgroundColor:'rgba(0,0,0,0.5)',
		alignSelf:'center',
		justifyContent:'center',
		flexDirection:'row'
	},
	modalTxtStyle:{
		marginLeft:10,
		fontSize:15,
		color:'#ffffff',
		textAlign:'center',
		alignSelf:'center'
	},
	indicatorStyle:{
		height:40,
		alignSelf:'center',
	},
	completeStyle:{
		height:20,
		width:20,
		alignSelf:'center',
	}
})


module.exports = ModalLayer;