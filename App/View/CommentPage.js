import React, {Component} from 'React';
import {
	StyleSheet,
	ListView,
	View,
	Text,
	Image,
	Platform,
} from 'react-native';

import TitleNavigatorWithBack from '../Component/TitleNavigatorWithBack';

export default class CommentPage extends Component{
	constructor(props){
		super(props);

	}

	componentDidMount(){

	}

	render(){
		return(
			<View style={{flex:1}}>
                <TitleNavigatorWithBack navigator={this.props.navigator} title={this.props.title}/>
                <View style={styles.containerStyle}>
                   
                </View>
            </View>
		);
	}

}

const styles = StyleSheet.create({
	containerStyle:{
		flex:1,
		marginTop:0, 
		bottom:0, 
		backgroundColor:'#f5f5f5',
	}
})
