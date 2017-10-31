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
    View,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';
const mWidth = Dimensions.get('window').width;

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
		};
	};

	componentDidMount(){
		this._getSubjectPlazaData();
	};

	_getSubjectPlazaData(){
		let url = "https://leancloud.cn/1.1/classes/SubjectPlaza";
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
