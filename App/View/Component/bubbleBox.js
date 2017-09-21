import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

export default class bubbleBox extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.reminder}>Error</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		marginBottom: 50,
		marginLeft: 50,
		marginRight: 50,
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