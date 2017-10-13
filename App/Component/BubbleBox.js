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
			},
			2000
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
					<Text style={styles.reminder}>{this.props.text}</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	container:{
		bottom: 80,
		marginLeft: 50,
		marginRight: 50,
		borderRadius: 2,
		backgroundColor: '#222222',
		height: 30,
		justifyContent: 'center',
	},
	reminder:{
		fontSize:15,
		textAlign:'center',
		color: '#ffffff',
	},
});

module.exports = BubbleBox;