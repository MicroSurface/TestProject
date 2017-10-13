import React, {Component} from 'react';
import {
	StyleSheet,
	Navigator,
	TouchableOpacity,
	Text,
	View
} from 'react-native'

import LogIn from './LogIn'

export default class SecondPage extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	message: null
        };
	}

	componentDidMount(){
		this.setState({
			message: this.props.message
		});
	}

	jumpToLogin(){
		const{ navigator } = this.props;
		if (navigator) {
			navigator.popToTop();
		}
	}

	render(){
		return(<View>
			<TouchableOpacity
				onPress = {this.jumpToLogin.bind(this)}>
				<Text style = {{fontSize: 20, color: '#ff0000', margin: 30}}>Click to home page</Text>
                <Text style={{fontSize:20,color: 'red',marginTop:10, marginLeft: 30, marginRight: 30}}>parament: message={ this.state.message }</Text>
			</TouchableOpacity>
		</View>);
	}
}