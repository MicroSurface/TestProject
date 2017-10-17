'use strict';

import React,{Component} from 'react';
import {
	AppRegistry,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';

export default class QuickVisitBanner extends Component {
	constructor(props){
		super(props);
	}

	_renderIcons(){
		let arr = [];
		for (let i in this.props.iconList) {
			if(i == 0){
				arr.push(
					<TouchableOpacity key={i} style={styles.containerStyle1}>
						<Image style={styles.imageStyle} source={this.props.iconList[i].image}/>
						<Text style={styles.textStyle}>{this.props.iconList[i].titles}</Text>
					</TouchableOpacity>
				);
			}else{
				arr.push(
					<TouchableOpacity key={i} style={styles.containerStyle2}>
						<Image style={styles.imageStyle} source={this.props.iconList[i].image}/>
						<Text style={styles.textStyle}>{this.props.iconList[i].titles}</Text>
					</TouchableOpacity>
				);
			}
			
		}
		return arr;
	}

	render(){
		return(
			<View style={{flexDirection:'row',justifyContent:'center', height: 70, backgroundColor: '#ffffff'}}>
				{this._renderIcons()}
			</View>
		)
	}

}

const styles = StyleSheet.create({
	containerStyle1: {
		marginTop:10,
		height:50,
		width:45
	},
	containerStyle2: {
		marginLeft: 25,
		marginTop:10,
		height:50,
		width:45
	},
	imageStyle:{
		alignSelf:'center',
		height:30,
		width:30
	},
	textStyle:{
		marginTop:10,
		height:12,
		fontSize:10,
		color:'#666666',
		textAlign:'center'
	}

})

module.exports = QuickVisitBanner;