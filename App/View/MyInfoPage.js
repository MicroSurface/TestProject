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

export default class MyInfoPage extends Component{
	constructor(props){
		super(props);

	}


	_pushToLogIn(){
		const{navigator} = this.props;
		navigator.push({
			name:'LogIn',
			component:LogIn,
			params:{
				title:'登录/注册',
			}
		})
	}

	render(){
		return(
			<View style={{flex:1, backgroundColor:'#f5f5f5'}}>
				<TitleNavigator title={this.props.title}/>
				<TouchableOpacity 
					style={styles.myInfoView}
					onPress={()=>{this._pushToLogIn()}}>
					<Image style={styles.headImageStyle} source={DefautHeader}/>
					<Text style={styles.logInStyle}>登录体验更多功能</Text>
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