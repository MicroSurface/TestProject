'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

export default class BubbleBox extends Component {
	constructor(props){
		super(props);
		this.state = {hidden: false};
	}
	componentDidMount() {
		this.timer = setTimeout(() => {
			this.setState({hidden:true});
			}, 2000
		);
	}


	componentWillUnmount() {
		//卸载该页面时清除计时器
		this.timer && clearTimeout(this.timer);
	}
	

	render() {
		if (this.state.hidden){
			return null;
		}else{
			return (
				<View style={styles.container}>
					<Text style={styles.reminder}>{this.props.test}</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	container:{
		position:'absolute',
		bottom: 30,
		borderRadius: 2,
		backgroundColor: '#222222',
		padding:10,
		height: 40,
		alignSelf:'center',
		justifyContent: 'center',
	},
	reminder:{
		fontSize:15,
		textAlign:'center',
		color: '#ffffff',
	},
});

module.exports = BubbleBox;