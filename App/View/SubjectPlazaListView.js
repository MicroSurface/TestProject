import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    ListView,
    RefreshControl,
    TouchableOpacity,
    Text,
    Image,
    Button,
    ScrollView,
    View,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';
import SubjectItemsData from '../Service/SubjectService';
const mWidth = Dimensions.get('window').width;
var subjectItemsData = new SubjectItemsData();

export default class SubjectPlazaListView extends Component {
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2,
			sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
		});

		this.state = {
			dataSource:ds,
			statistics:{},
			refreshing:true,
		};
	};

	componentDidMount(){
		this._getSubjectPlazaData();
	};

	async _getSubjectPlazaData(){
		var result = await subjectItemsData.getSubjectPlazaData();
		if (result.status == 200 && result.success){
			this.setState({statistics:result.responseData, refreshing:false});
		}else{
			this.setState({refreshing:false});
		}
	}

	_renderRow(rowData, sectionId, rowId){
		return(
			<TouchableOpacity style={styles.itemStyle} >
				<Image style={styles.imageStyle} source={{uri:rowData.topicImageUrl}} >
					<Text style={styles.topicNameStyle}>{rowData.topicName}</Text>
					<View style={styles.topicInfoStyle} >
						<Text style={styles.viewQuantityStyle}>{rowData.viewQuantity} 次浏览</Text>
						<Text style={styles.favoriteQuantityStyle}>{rowData.favoriteQuantity} 人关注</Text>
					</View>
				</Image>
			</TouchableOpacity>
		)
	}

	render(){
		return(
			<View style={styles.listViewStyle}>
				<ListView
					 refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>this._getSubjectPlazaData()} />} 
					dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
					renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
					showsVerticalScrollIndicator={false}
					enableEmptySections={true}>
				</ListView>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	listViewStyle:{
		position:'absolute',
		top:0,
		bottom:0,
		backgroundColor:'#f5f5f5',
	},
	itemStyle:{
		marginTop:8,
		width:mWidth,
		height: 200,
	},
	imageStyle:{
		marginTop:0,
		width:mWidth,
		height:200,
	},
	topicNameStyle:{
		marginTop:130,
		marginLeft:20,
		fontSize:18,
		fontWeight:'bold',
		color:'#ffffff',
		textAlign:'left',
		backgroundColor:'rgba(255,255,255,0)',
	},
	topicInfoStyle:{
		marginTop:10,
		marginLeft:20,
		height:30,
		width:200,
		flexDirection:'row',
		justifyContent:'flex-start',
	},
	viewQuantityStyle:{
		marginTop:0,
		fontSize:11,
		color:'#ffffff',
		textAlign:'left',
		backgroundColor:'rgba(255,255,255,0)'
	},
	favoriteQuantityStyle:{
		marginLeft:10,
		fontSize:11,
		color:'#ffffff',
		textAlign:'left',
		backgroundColor:'rgba(255,255,255,0)'
	}

})

module.exports = SubjectPlazaListView;
