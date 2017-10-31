import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    ListView,
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

var SubjectPlazaListView = require('../View/SubjectPlazaListView');

var arr = [];
var hasBanner = null;

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
		};
	}

	componentDidMount(){
		this._fetchData();
	}

	_fetchData(){
		let url = "https://leancloud.cn/1.1/classes/" + this.props.subjectProps;
		fetch(url,{
			method:'GET',
			headers:{
				'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
                'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
                'Content-Type':'application/json',
			},
		})
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({statistics:responseData});
		})
		// var response = null;
		// if(this.props.subjectProps == "Matrix"){
		// 	response = require('../Statistics/SubjectItemData_Matrix');
		// }else if(this.props.subjectProps == "SubjectPlaza"){
		// 	response = require('../Statistics/SubjectItemData_SubjectPlaza');
		// }else{
		// 	response = require('../Statistics/SubjectItemData_ChargeSubject');
		// }
		// let responseData = response.result;
		// this.setState({statistics:responseData});


	}

	_putFavoriteStatus(_objectId, _isFavorite, _items, _favoriteQuantity){
		let url = "https://leancloud.cn/1.1/classes/" + _items + "/" + _objectId;
		fetch(url,{
			method:'PUT',
			headers:{
				'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
                'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
                'Content-Type':'application/json',
			},
			body: JSON.stringify({
		        'isFavorite': _isFavorite,
		        'favoriteQuantity': _favoriteQuantity ,
		    })
		})
	}

	_renderRow(rowData,sectionId, rowId){
		return(
			<View>
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
			<ScrollView style={styles.scrollViewStyle}
				showsVerticalScrollIndicator={false}>
				{ _hasBanner ? <Image style={styles.subjectBannerStyle} source={{uri:"https://cdn.sspai.com/article/1af40c38-4c79-b17c-4fac-3a1a3dcb31ef.jpg"}}/> : null}
				<ListView 
					dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
					renderRow={(rowData,sectionId, rowId) => this._renderRow(rowData, sectionId,rowId)} 
					showsVerticalScrollIndicator={false}
					enableEmptySections={true}>
				</ListView>
			</ScrollView>
		)
	}

	render(){
		switch(this.props.subjectProps){
			case "Matrix":
				hasBanner = true;
				return this._renderMainPage(hasBanner);
			case "SubjectPlaza":
				return(
					<SubjectPlazaListView subjectProps = "SubjectPlaza" />
				);
			default:
				hasBanner = false;
				return this._renderMainPage(hasBanner);
		}
	}


}

module.exports = SubjectListView;