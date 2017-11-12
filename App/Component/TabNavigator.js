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
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dimensions from 'Dimensions';
import HomeGrey from '../Image/Icons/icon_home_grey.png';
import HomeBlue from '../Image/Icons/icon_home_blue.png';
import SubjectGrey from '../Image/Icons/icon_subject_grey.png';
import SubjectBlue from '../Image/Icons/icon_subject_blue.png';
import DiscoverGrey from '../Image/Icons/icon_discover_grey.png';
import DiscoverBlue from '../Image/Icons/icon_discover_blue.png';
import MyInfoGrey from '../Image/Icons/icon_myinfo_grey.png';
import MyInfoBlue from '../Image/Icons/icon_myinfo_blue.png';

import SecondPage from '../View/SecondPage';
import HomePage from '../View/HomePage';
import SubjectPage from '../View/SubjectPage';
import MyInfoPage from '../View/MyInfoPage';

const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;

export default class TabNavigators extends Component{
	constructor (props){
		super(props);
		this.state = {
			selectedTab: 'subject'
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
						renderIcon={()=> <Image style={{height:25, width:25}} source={HomeGrey}/>}
						renderSelectedIcon={()=> <Image style={{height:25, width:25}} source={HomeBlue}/>}
						onPress={()=>this.setState({ selectedTab:'home'})}>
						<HomePage navigator={this.props.navigator} title='首页'/>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="专题"
						selected={this.state.selectedTab === 'subject'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={{height:23, width:23}} source={SubjectGrey}/>}
						renderSelectedIcon={()=> <Image style={{height:23, width:23}} source={SubjectBlue}/>}
						onPress={()=>this.setState({ selectedTab:'subject'})}>
						<SubjectPage navigator={this.props.navigator} title='专题'/>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="发现"
						selected={this.state.selectedTab === 'discover'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={{height:26, width:26}} source={DiscoverGrey}/>}
						renderSelectedIcon={()=> <Image style={{height:26, width:26}} source={DiscoverBlue}/>}
						onPress={()=>this.setState({ selectedTab:'discover'})}>
						<SecondPage navigator={this.props.navigator} title='发现'/>
					</TabNavigator.Item>
					<TabNavigator.Item
						title="我的"
						selected={this.state.selectedTab === 'myInfo'}
						selectedTitleStyle={styles.selectedTextStyle}
						titleStyle={styles.textStyle}
						renderIcon={()=> <Image style={{height:23, width:23}} source={MyInfoGrey}/>}
						renderSelectedIcon={()=> <Image style={{height:23, width:23}} source={MyInfoBlue}/>}
						onPress={()=>this.setState({ selectedTab:'myInfo'})}>
						<MyInfoPage navigator={this.props.navigator} title='我的' />
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
	textSyle: {
		color: '#999',
	},
	selectedTextStyle: {
		color: 'black',
	}
});

module.exports = TabNavigators;