import React, {Component} from 'React';
import {
	StyleSheet,
	Navigator,
	View,
	Text,
	Image,
	AppRegistry,
} from 'react-native';

export default class TitleNavigator extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<View style={styles.container} >
				<Text style={styles.titleStyle}>{this.props.title}</Text>
			</View>
		)
	}


}

const styles = StyleSheet.create({
	container:{
		marginTop:0,
		height:64,
		backgroundColor:'#1E90FF',
		left:0,
		right:0,
		justifyContent:'center',
	},
	titleStyle:{
		marginTop:10,
		fontSize:20,
		color:'#ffffff',
		textAlign:'center',
		alignSelf:'center',
		fontWeight:'bold',
	},
})

module.exports = TitleNavigator;