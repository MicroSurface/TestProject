import React, {Component} from 'React';
import {
	StyleSheet,
	Navigator,
	View,
	Text,
	Image,
	AppRegistry,
	Platform,
	StatusBar,
} from 'react-native';

export default class TitleNavigator extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<View style={styles.container}>
				<StatusBar
					hidden={false}
					translucent={true}
					backgroundColor={'rgba(255,255,255,0.1)'}
					barStyle={'light-content'}>
				</StatusBar>
				<View>
					<Text style={styles.titleStyle}>{this.props.title}</Text>
				</View>
			</View>
			
		)
	}


}

const styles = StyleSheet.create({
	container:{
		marginTop:0,
		height:(Platform.OS == 'ios') ? 84 : 80,
		backgroundColor:'#1E90FF',
		left:0,
		right:0,
		justifyContent:'center',
	},
	titleStyle:{
		marginTop:(Platform.OS == 'ios') ? 20 : 20,
		fontSize:20,
		color:'#ffffff',
		textAlign:'center',
		alignSelf:'center',
		fontWeight:'bold',
	},
})

module.exports = TitleNavigator;