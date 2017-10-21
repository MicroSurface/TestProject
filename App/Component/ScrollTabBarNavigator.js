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

var SubjectListView = require('../Component/SubjectListView');

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
				<View style={{flex:1}} tabLabel="Matrix">
					<SubjectListView subjectProps="Matrix"/>
				</View>
				<View style={{flex:1}} tabLabel="专题广场">
					<SubjectListView subjectProps="SubjectPlaza"/>
				</View>
				<View style={{flex:1}} tabLabel="付费栏目">
					<SubjectListView subjectProps="ChargeSubject"/>
				</View>
				<Text tabLabel="效率工具">hardware</Text>
				<Text tabLabel="手机摄影">hardware</Text>
				<Text tabLabel="生活方式">hardware</Text>
				<Text tabLabel="游戏">hardware</Text>
				<Text tabLabel="硬件">hardware</Text>
			</ScrollableTabView>
		);
	}
}


module.exports = ScrollTabBarNavigator;