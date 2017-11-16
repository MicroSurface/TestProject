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

var showModal = false;

export default class ModalDrawer extends Component{
	constructor(props){
		super(props);
		this.state = {
			isModal:this.props.isVisible,
		}
	}

	_onRequestClose(){
		this.setState({isModal:false});
	}

	render(){
		return(
			<Modal
				animationType={'slide'}
	          	transparent={true}
	          	visible={this.props.isVisible}>
	          	<View style={styles.modalStyle}>
	          		<TouchableOpacity 
		          		style={styles.cancelStyle}
		          		onPress={() => this.setState({isModal:false})}>
	          		</TouchableOpacity>
	          	</View>
			</Modal>
		)
	}
}

const styles = StyleSheet.create({
	modalStyle:{
		flex:1,
		position:'absolute',
		top:0,
		bottom:0,
		left:0,
		right:0,
		backgroundColor:'rgba(0,0,0,0.5)',
	},
	cancelStyle:{
		marginBottom:50,
		marginLeft:50,
		marginRight:50,
		height:50,
		backgroundColor:'#ffffff',
	}
})

module.exports = ModalDrawer;