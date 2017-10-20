'use strict';
import React, {Component} from 'React';
import {
	StyleSheet,
	View,
	Text,
	Image,
	AppRegistry,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from 'react-native-scrollable-tab-view/ScrollableTabBar';

export default class ScrollTabBarNavigator extends Component{
	constructor(props){
		super(props);

	}

	render(){
		return(
			<ScrollableTabView
				renderTabBar={()=> <ScrollableTabBar/>}
				tabBarPosition='top'
				initialPage={0}>
				<View style={{height:100, justifyContent:'center'}} tabLabel="Matrix">
					<Text style={{textAlign:'center'}}>Maxtix</Text>
				</View>
				<Text tabLabel="Game">test</Text>
				<Text tabLabel="Hardware">game</Text>
				<Text tabLabel="Subject">hardware</Text>
				<Text tabLabel="Subject1">hardware</Text>
				<Text tabLabel="Subject2">hardware</Text>
				<Text tabLabel="Subject3">hardware</Text>
			</ScrollableTabView>
		);
	}
}


module.exports = ScrollTabBarNavigator;