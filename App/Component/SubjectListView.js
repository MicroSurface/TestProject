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
		var response = null;
		if(this.props.subjectProps == "Matrix"){
			response = require('../Statistics/SubjectItemData_Matrix');
		}else if(this.props.subjectProps == "SubjectPlaza"){
			response = require('../Statistics/SubjectItemData_SubjectPlaza');
		}else{
			response = require('../Statistics/SubjectItemData_ChargeSubject');
		}
		let responseData = response.Data;
		this.setState({statistics:responseData});
	}

	_renderRow(rowData, rowId){

		return(
			<View>
				<View style={styles.subjectListStyle}>
					<Text style={{fontSize:20, color:'#222222'}}>{rowData.subjectTitle}</Text>
				</View>
			</View>
			
		);
	}

	render(){
		return(
			<ScrollView style={styles.scrollViewStyle}
				showsVerticalScrollIndicator={false}>
				<View style={styles.subjectBannerStyle} />
				<ListView 
					dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
					renderRow={(rowData, rowId) => this._renderRow(rowData, rowId)} 
					showsVerticalScrollIndicator={false}>
				</ListView>
			</ScrollView>
		);
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
		backgroundColor:'#ffff00',
	},
	subjectListStyle:{
		marginTop:10,
		marginLeft:5,
		marginRight:5,
		height:150,
		width:mWidth-10,
		borderRadius:3,
		justifyContent:'center',
		backgroundColor:'#ffffff',
	}
})



module.exports = SubjectListView;