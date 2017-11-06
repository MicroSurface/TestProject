import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    ListView,
    NetInfo,
    RefreshControl,
    TouchableOpacity,
    Text,
    Image,
    Button,
    ScrollView,
    View
} from 'react-native'

import styles from '../CSS/SubjectListViewStyle';
import Dimensions from 'Dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import SubjectItemsData from '../Service/SubjectService';
import SubjectPlazaListView from '../View/SubjectPlazaListView';
import ChargeSubjectListView from '../View/ChargeSubjectListView';
import NoNetworkRemindPage from './NoNetworkRemindPage';

var arr = [];
var hasBanner = null;
var hasConnected = false;
var subjectItemsData = new SubjectItemsData();

export default class SubjectListView extends Component{
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
		});
		var getRowId = null;
		this.state = {
			dataSource:ds,
			statistics:{},
			_isClicked: false,
			isNotFirstLoaded: false,
			refreshing:true,
		};
	}

	componentDidMount(){
		//检查网络状态
		// NetInfo.isConnected.fetch().done((isConnected) => {
		// 	NetInfo.addEventListener(
		// 		'change',
		// 		this.handleConnectivityChange,
		
		this._fetchData();
		// 	);
		// })		
	}

	handleConnectivityChange(isConnected){
		NetInfo.removeEventListener(
			'change',
			this.handleConnectivityChange
		)
	}

	async _fetchData(){
		var result = await subjectItemsData.getItemsData(this.props.subjectProps);
		if (result.status == 200 && result.success){
			this.setState({statistics:result.responseData, refreshing:false});
		}else{
			this.setState({refreshing:false});
		}
	}

	async _putFavoriteStatus(_objectId, _isFavorite, _items, _favoriteQuantity){
		var result = await subjectItemsData.putFavoriteStatus(_objectId, _isFavorite, _items, _favoriteQuantity);
		if (result.status !== 200 && !result.success){
			console.log(result);
		}
	}

	_renderRow(rowData,sectionId, rowId){
		return(
			<View style={styles.subjectListStyle}>
				<View style={styles.headTitleStyle} >
					<Image style={styles.headImgStyle} source={{uri:rowData.headImageUrl}} />
					<View style={styles.userStyle} >
						<Text style={styles.nickNameStyle}>{rowData.userNickName}</Text>
						<Text style={styles.upDateTimeStyle}>{rowData.publishDate.iso}</Text>
					</View>
				</View>
				{this._renderLine()}
				<Text numberOfLines={1} style={styles.topicTitleStyle}>{rowData.topicTitle}</Text>
				<View style={styles.topicStyle}>
					<Image style={styles.topicImgStyle} source={{uri:rowData.topicPictureUrl}} />
					<Text numberOfLines={5} style={styles.topicTextStyle} >{rowData.briefText}</Text>
				</View>
				{this._renderTopicSource(rowData)}
				<View style={styles.commentStyle}>
					<TouchableOpacity
						key={rowId}
						onPress={()=>{this._refreshFavorite(rowId)}}>
						{this._renderFavorite(rowData, rowId)}
					</TouchableOpacity>
					
					<TouchableOpacity>
						<FontAwesome name={"comment-o"} size={17} color='#666666' />
					</TouchableOpacity>
					<Text style={styles.commentQuantityStyle}>{rowData.commentQuantity}</Text>
				</View>
			</View>
			
		);
	}

	_renderLine(){
		return(
			<View style={styles.headerLineStyle} />
		);
	}

	_renderTopicSource(rowData){
		if(rowData.topicSource){
			return(
				<View style={styles.topicSourceStyle} >
					<Text style={styles.topicSourceComeFromStyle}>来自</Text>
					<Text style={styles.topicSourceTextStyle}>{rowData.topicSource}</Text>
				</View>
			)
		}else{
			return null;
		}
	}

	_refreshFavorite(rowId){
		getRowId = rowId
		this.setState({_isClicked: true, isNotFirstLoaded: true});
	}

	
	_renderFavorite(rowData, rowId){
		if (this.state.isNotFirstLoaded){
			if (getRowId == rowId){
				rowData.isFavorite = ! rowData.isFavorite;
				if (arr[rowId]){
					let quantity = rowData.isFavorite ? rowData.favoriteQuantity : rowData.favoriteQuantity-1;
					this._putFavoriteStatus(rowData.objectId, rowData.isFavorite, this.props.subjectProps, quantity);
					return(
						<View style={styles.favoriteStyle}>
							<FontAwesome name={rowData.isFavorite ? "heart" : "heart-o"} size={17} color={rowData.isFavorite ? "#ff0000" : "#666666"} />
							<Text style={styles.favoriteQuantityStyle}>{quantity}</Text>
						</View>
					)
				}else{
					let quantity = rowData.isFavorite ? rowData.favoriteQuantity+1 : rowData.favoriteQuantity;
					this._putFavoriteStatus(rowData.objectId, rowData.isFavorite, this.props.subjectProps, quantity);
					return(
						<View style={styles.favoriteStyle}>
							<FontAwesome name={rowData.isFavorite ? "heart" : "heart-o"} size={17} color={rowData.isFavorite ? "#ff0000" : "#666666"} />
							<Text style={styles.favoriteQuantityStyle}>{quantity}</Text>
						</View>
					)
				}
			}else{
				if (arr[rowId]){
					return(
						<View style={styles.favoriteStyle}>
							<FontAwesome name={rowData.isFavorite ? "heart" : "heart-o"} size={17} color={rowData.isFavorite ? "#ff0000" : "#666666"} />
							<Text style={styles.favoriteQuantityStyle}>{rowData.isFavorite ? rowData.favoriteQuantity : rowData.favoriteQuantity-1}</Text>
						</View>
					)
				}else{
					return(
						<View style={styles.favoriteStyle}>
							<FontAwesome name={rowData.isFavorite ? "heart" : "heart-o"} size={17} color={rowData.isFavorite ? "#ff0000" : "#666666"} />
							<Text style={styles.favoriteQuantityStyle}>{rowData.isFavorite ? rowData.favoriteQuantity+1 : rowData.favoriteQuantity }</Text>
						</View>
					)
				}
				
			}
		}else{
			let isFirstFavorite = rowData.isFavorite ? true : false;
			arr.push(isFirstFavorite);
			return(
				<View style={styles.favoriteStyle}>
					<FontAwesome name={rowData.isFavorite ? "heart" : "heart-o"} size={17} color={rowData.isFavorite ? "#ff0000" : "#666666"} />
					<Text style={styles.favoriteQuantityStyle}>{rowData.favoriteQuantity}</Text>
				</View>
			)
		}
	}

	_renderMainPage(_hasBanner){
		return(
			<View style={styles.scrollViewStyle}>
				<ScrollView 
					refreshControl={
	                    <RefreshControl
	                        refreshing={this.state.refreshing}
	                        tintColor={'#ff0000'}
	                        title={'下拉刷新'}
	                        onRefresh={()=>this._fetchData()} />}
					showsVerticalScrollIndicator={false}>
					{ _hasBanner ? <Image style={styles.subjectBannerStyle} source={{uri:"https://cdn.sspai.com/article/1af40c38-4c79-b17c-4fac-3a1a3dcb31ef.jpg"}}/> : null}
					<ListView 
						dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
						renderRow={(rowData,sectionId, rowId) => this._renderRow(rowData, sectionId,rowId)} 
						showsVerticalScrollIndicator={false}
						enableEmptySections={true}
						initialListSize={1}
						pageSize={1}>
					</ListView>
				</ScrollView>
			</View>
			
			
		)
	}

	render(){
		switch(this.props.subjectProps){
			case "Matrix":
				hasBanner = true;
				return this._renderMainPage(hasBanner);
				break;
			case "SubjectPlaza":
				return(
					<SubjectPlazaListView subjectProps = "SubjectPlaza" />
				);
				break;
			case "ChargeSubject":
				return(
					<ChargeSubjectListView subjectProps = "ChargeSubject" />
				);
				break;
			default:
				hasBanner = false;
				return this._renderMainPage(hasBanner);
		}
	}
}

module.exports = SubjectListView;