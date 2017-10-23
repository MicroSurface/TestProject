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

import Dimensions from 'Dimensions';
const mWidth = Dimensions.get('window').width;

export default class SubjectListView extends Component{
	constructor(props){
		super(props);
		var ds = new ListView.DataSource({
			rowHasChanged:(r1, r2) => r1 !== r2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
		});
		this.state = {
			dataSource:ds,
			statistics:{},
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
			console.log(responseData);
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

	_renderRow(rowData, rowId){

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

				</View>
			</View>
			
		);
	}

	_renderLine(){
		return(
			<View style={styles.headerLineStyle} />
		);
	}

	render(){
		if (this.props.subjectProps == "Matrix"){
			return(
				<ScrollView style={styles.scrollViewStyle}
					showsVerticalScrollIndicator={false}>
					<Image style={styles.subjectBannerStyle} source={{uri:"https://cdn.sspai.com/article/1af40c38-4c79-b17c-4fac-3a1a3dcb31ef.jpg"}}/>
					<ListView 
						dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
						renderRow={(rowData, rowId) => this._renderRow(rowData, rowId)} 
						showsVerticalScrollIndicator={false}
						enableEmptySections={true}>
					</ListView>
				</ScrollView>
			);
		}else{
			return(
				<ScrollView style={styles.scrollViewStyle}
					showsVerticalScrollIndicator={false}>
					
				</ScrollView>
			)
		}
	}


}

const styles = StyleSheet.create({
	scrollViewStyle:{
		position:'absolute',
		top:0,
		bottom:0,
		backgroundColor:'#f5f5f5',
	},
	subjectBannerStyle:{
		marginTop:0,
		height:150,
		width:mWidth,
	},
	subjectListStyle:{
		marginTop:10,
		marginLeft:5,
		marginRight:5,
		height:210,
		width:mWidth-10,
		borderRadius:3,
		backgroundColor:'#ffffff',
	},
	headTitleStyle:{
		height:50,
		width:mWidth-10,
		backgroundColor:'#ffffff',
		flexDirection:'row',
		justifyContent:'flex-start',
	},
	headImgStyle:{
		marginTop:10,
		marginLeft:10,
		height:30,
		width:30,
		borderRadius:15,
	},
	
	headerLineStyle:{
        marginTop:0, 
        width:mWidth-10, 
        height:1, 
        backgroundColor:'#dfdfdf'
    },
    userStyle:{
    	marginTop:0,
    	marginLeft:15,
    	height:40,
    	width:200,
    	flexDirection:'column',
    },
    nickNameStyle:{
    	marginTop:10,
    	fontSize:14,
    	color:'#222222',
    	textAlign:'left'
    },
    upDateTimeStyle:{
    	marginTop:5,
    	fontSize:10,
    	color:'#666666',
    	textAlign:'left',
    },
    topicTitleStyle:{
    	marginTop:10,
    	marginLeft:10,
    	marginRight:30,
    	height:20,
    	fontSize:16,
    	fontWeight:'bold',
    	color:'#222222',
    },
    topicStyle:{
    	marginTop:0,
    	marginLeft:10,
    	marginRight:10,
    	height:120,
    	flexDirection:'row'
    },
    topicImgStyle:{
		marginTop:10,
		marginLeft:0,
		height:100,
		width:100,
		borderRadius:3,
	},
	topicTextStyle:{
		marginTop:10,
		marginLeft:15,
		height:100,
		width:220,
		fontSize:13,
		lineHeight:18,
		color:'#222222'
	}
})



module.exports = SubjectListView;