'use strict';
import React, {Component} from 'React';
import {
	StyleSheet,
	View,
	Text,
	Image,
	AppRegistry,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Dimensions from 'Dimensions';

import SecondPage from '../SecondPage';
import HomePage from '../HomePage';

const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;

export default class TabNavigators extends Component{
	constructor (props){
		super(props);
		this.state = {
			selectedTab: 'home'
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<TabNavigator >
					<TabNavigator.Item
						title="首页"
						selected={this.state.selectedTab === 'home'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						renderSelectedIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						onPress={()=>this.setState({ selectedTab:'home'})}>
						<HomePage />
					</TabNavigator.Item>
					<TabNavigator.Item
						title="专题"
						selected={this.state.selectedTab === 'subject'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						renderSelectedIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						onPress={()=>this.setState({ selectedTab:'subject'})}>
						<View>
							<Text>This is test</Text>
						</View>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="发现"
						selected={this.state.selectedTab === 'discover'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						renderSelectedIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						onPress={()=>this.setState({ selectedTab:'discover'})}>
						<SecondPage />
					</TabNavigator.Item>
					<TabNavigator.Item
						title="我的"
						selected={this.state.selectedTab === 'myInfo'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						renderSelectedIcon={()=> <Image style={styles.iconStyle} source={require("./Images/iconImage.png")}/>}
						onPress={()=>this.setState({ selectedTab:'myInfo'})}>
						<View>
							<Text>首页</Text>
						</View>
					</TabNavigator.Item>
				</TabNavigator>
			</View>
		)	
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		width: mWidth,
		height: 40,
		bottom: 2,
    },  
	iconStyle: {
		width: 26,
		height: 26,
	},
	textSyle: {
		color: '#999',
	},
	selectedTextStyle: {
		color: 'black',
	}
});

module.exports = TabNavigators;