import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

export default class bubbleBox extends Component {
	constructor(props){
		super(props);
		this.state = {hidden: false};
	}
	componentDidMount() {
		this.timer = setTimeout(
			function(){
				this.state = true;},
			2000
		);
	}


	componentWillUnMount() {
		//卸载该页面时清除计时器
		this.timer && clearTimeout(this.timer);
	}
	

	render() {
		if (this.state.hidden){
			return null;
		}else{
			return (
				<View style={styles.container}>
					<Text style={styles.reminder}>Error</Text>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	container:{
		marginBottom: 20,
		marginLeft: 50,
		marginRight: 50,
		borderRadius: 2,
		height: 30,
		backgroundColor: '#222222',
		justifyContent: 'center',
	},
	reminder:{
		fontSize:15,
		textAlign:'center',
		color: '#ffffff',
	},
});

module.exports = bubbleBox;