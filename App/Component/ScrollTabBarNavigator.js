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

import SubjectListView from '../Component/SubjectListView';

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
					<SubjectListView navigator={this.props.navigator} subjectProps="Matrix"/>
				</View>
				<View style={{flex:1}} tabLabel="专题广场">
					<SubjectListView navigator={this.props.navigator} subjectProps="SubjectPlaza"/>
				</View>
				<View style={{flex:1}} tabLabel="付费栏目">
					<SubjectListView navigator={this.props.navigator} subjectProps="ChargeSubject"/>
				</View>
				<View style={{flex:1}} tabLabel="效率工具">
					<SubjectListView navigator={this.props.navigator} subjectProps="EfficiencyTools"/>
				</View>
				<View style={{flex:1}} tabLabel="手机摄影">
					<SubjectListView navigator={this.props.navigator} subjectProps="MobilePhotograph"/>
				</View>
				<View style={{flex:1}} tabLabel="游戏">
					<SubjectListView navigator={this.props.navigator} subjectProps="Game"/>
				</View>
				<View style={{flex:1}} tabLabel="硬件">
					<SubjectListView navigator={this.props.navigator} subjectProps="Hardware"/>
				</View>
			</ScrollableTabView>
		);
	}
}


module.exports = ScrollTabBarNavigator;