import React, {Component} from 'React';
import {
	StyleSheet,
	View,
	Text,
	Image,
	AppRegistry,
	TouchableOpacity,
	Platform,
	StatusBar,
} from 'react-native';
import {
  Navigator,
} from 'react-native-deprecated-custom-components';

import IconBack from '../Image/Icons/icon_back.png';
import IconClose from '../Image/Icons/icon_close.png';

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

export class TitleNavigatorWithBack extends Component{
	constructor(props){
		super(props);
	}

	_popBack(){
		const{ navigator } = this.props;
		if (navigator) {
			navigator.pop();
		}
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
					<TouchableOpacity
					 	style={styles.backBtnStyle}
					 	onPress={() => {this._popBack()}}>
						<Image style={styles.backImgStyle} source={IconBack}/>
					</TouchableOpacity>
					<Text style={styles.titleStyle}>{this.props.title}</Text>
				</View>
			</View>
			
		)
	}
}

export class TitleNavigatorWithClose extends Component{
	constructor(props){
		super(props);
	}

	_popBack(){
		const{ navigator } = this.props;
		if (navigator) {
			navigator.pop({
				sceneConfig:Navigator.SceneConfigs.FloatFromBottom,
			});
		}
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
					<TouchableOpacity
					 	style={styles.backBtnStyle}
					 	onPress={() => {this._popBack()}}>
						<Image style={styles.closeImgStyle} source={IconClose}/>
					</TouchableOpacity>
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
	backBtnStyle:{
		position:'absolute',
		marginTop:(Platform.OS == 'ios') ? 17 : 20,
		marginLeft:10,
		height:30,
		width:30,
		justifyContent:'center',
	},
	backImgStyle:{
		height:20,
		width:20,
		alignSelf:'center',
	},
	closeImgStyle:{
		height:15,
		width:15,
		alignSelf:'center',
	}
})


// module.exports = TitleNavigator;
// module.exports = TitleNavigatorTest1;

