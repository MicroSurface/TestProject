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
				arr.push(<Image key={i} style={styles.imageStyle1} source={this.props.iconList[i].image}/>);
			}else{
				arr.push(<Image key={i} style={styles.imageStyle2} source={this.props.iconList[i].image}/>);
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
	imageStyle1: {
		marginTop:10,
		height:30,
		width:30,
	},
	imageStyle2: {
		marginLeft: 40,
		marginTop:10,
		height:30,
		width:30,
	}

})

module.exports = QuickVisitBanner;