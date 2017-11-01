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
				<View style={{flex:1}} tabLabel="效率工具">
					<SubjectListView subjectProps="EfficiencyTools"/>
				</View>
				<View style={{flex:1}} tabLabel="手机摄影">
					<SubjectListView subjectProps="MobilePhotograph"/>
				</View>
				<View style={{flex:1}} tabLabel="游戏">
					<SubjectListView subjectProps="Game"/>
				</View>
				<View style={{flex:1}} tabLabel="硬件">
					<SubjectListView subjectProps="Hardware"/>
				</View>
			</ScrollableTabView>
		);
	}
}


module.exports = ScrollTabBarNavigator;