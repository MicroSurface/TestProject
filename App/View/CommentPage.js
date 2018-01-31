import React, {Component} from 'React';
import {
	StyleSheet,
	ListView,
	ScrollView,
	TextInput,
	TouchableOpacity,
	RefreshControl,
	View,
	Text,
	Image,
	Platform,
} from 'react-native';

import styles from '../CSS/CommentPageStyle';
import {TitleNavigatorWithBack} from '../Component/TitleNavigator';
import NoRecord from '../Image/Icons/icon_no_records.png';
import Upload from '../Image/Icons/icon_upload.png';
import DefautHeader from '../Image/Icons/icon_default_header.png';
import CommentService from '../Service/CommentService';
var commentService = new CommentService();
var noData = false;

export default class CommentPage extends Component{
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2,
			sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
		})

		this.state = {
			dataSource: ds,
			statistics:{},
			refreshing:true,
			content:null,
		}
	}

	componentDidMount(){
		this._getCommentData(this.props.topicId);
	}

	async _getCommentData(_topicId){
		var commentResult = await commentService.getCommentInfo(_topicId);
		if (commentResult.status == 200 && commentResult.success){
			let result = commentResult.responseData.results;
			noData = result.length == 0 ? true : false;
			this.setState({statistics:commentResult.responseData, refreshing:false});
		}else{
			this.setState({refreshing:false});
		}
	}

	async _postComment(_topicId){
		if (this.state.content === null || (this.state.content).length == 0){
			alert("请输入评论");
			return;
		}
		var postResult = await commentService.postCommentInfo(_topicId, this.state.content);
		console.log("this is status: "+postResult.status);
		if (postResult.status == 201 && postResult.success){
			this._getCommentData(this.props.topicId);
			// console.log('this is result:'+result);
		}
	}

	_showListDataOrNot(){
		if (!noData){
			return(
				<View style={styles.containerStyle}>
	                <ListView
	                	refreshControl={
		                    <RefreshControl
		                        refreshing={this.state.refreshing}
		                        tintColor={'#ff0000'}
		                        title={'下拉刷新'}
		                        onRefresh={()=>this._getCommentData(this.props.topicId)} />}
	                	dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
	                	renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
	                	showsVeriticalScrollIndicator={true}
	                	enableEmptySections={true}
	                	initialListSize={1}>
	                </ListView>
	            </View>
			)
		}else{
			return(
				<ScrollView
					style={styles.containerStyle}
					refreshControl={
	                    <RefreshControl
	                        refreshing={this.state.refreshing}
	                        tintColor={'#ff0000'}
	                        title={'下拉刷新'}
	                        onRefresh={()=>this._getCommentData(this.props.topicId)} />}>
	                <View style={styles.reminderStyle}>
	                	<Image style={styles.noRecordStyle} source={NoRecord} />
	                	<Text style={styles.noRecordTextStyle}>目前还没有评论，快来评论吧！</Text>
	                </View>
	            </ScrollView>
			)
		}
	}

	_renderRow(rowData, sectionId, rowId){
		return(
			<TouchableOpacity>
				<View style={styles.listViewStyle}>
					<Image style={styles.headImageStyle} source={rowData.headImageUrl ? {uri:rowData.headImageUrl} : DefautHeader} />
					<View style={styles.userInfoStyle}>
						<Text style={styles.nickNameStyle}>{rowData.userNickName}</Text>
						<Text style={styles.commentContentStyle}>{rowData.commentContent}</Text>
						<Text style={styles.dateStyle}>{rowData.createdAt}</Text>
					</View>
				</View>
				<View style={styles.separateLineStyle} />
			</TouchableOpacity>
		)
	}

	render(){
		return(
			<View style={{flex:1}}>
				<TitleNavigatorWithBack navigator={this.props.navigator} title={this.props.title}/>
				{this._showListDataOrNot()}
				<View style={styles.commentStyle}>
					<TextInput 
						style={styles.commentTextInputStyle}
						placeholder={"请输入评论"}
						placeholderTextColor={'#dfdfdf'}
						fontSize={16}
						multiline={true}
						onChangeText={(content) => this.setState({content})}>
					</TextInput>
					<TouchableOpacity
						onPress={()=>this._postComment(this.props.topicId)}>
						<Image style={styles.upLoadStyle} source={Upload} />
					</TouchableOpacity>
				</View>
			</View>
			
		);	
	}

}


