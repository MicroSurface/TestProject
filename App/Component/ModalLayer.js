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
		}else{
			return(
				<ActivityIndicator color={'#ffffff'} style={styles.indicatorStyle} />
			)
		}
	}

	_showStatus(){
		if(this.props.isComplete){
			let params = '注册完成';
			return params;
		}else{
			let params = '注册中...';
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
		position:'absolute',
		bottom:100,
		height:50,
		left:100,
		right:100,
		borderRadius:5,
		backgroundColor:'rgba(0,0,0,0.5)',
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
		height:30,
		width:30,
		alignSelf:'center',
	}
})


module.exports = ModalLayer;