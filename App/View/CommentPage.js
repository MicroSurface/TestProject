import React, {Component} from 'React';
import {
	StyleSheet,
	ListView,
	TextInput,
	TouchableOpacity,
	View,
	Text,
	Image,
	Platform,
} from 'react-native';

import TitleNavigatorWithBack from '../Component/TitleNavigatorWithBack';
import NoRecord from '../Image/Icons/icon_no_records.png';
import Upload from '../Image/Icons/icon_upload.png';

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
		}
	}

	componentDidMount(){
		this._getCommentData();
	}

	_getCommentData(){

	}

	_postComment(){

	}

	_showListDataOrNot(){
		if (Object.keys(this.state.statistics).length == 0){
			return(
                <View style={styles.containerStyle}>
                	<Image style={styles.noRecordStyle} source={NoRecord} />
                	<Text style={styles.noRecordTextStyle}>目前还没有评论，快来评论吧！</Text>
                </View>
			)
		}else{
			return(
                <ListView 
                	dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
                	renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
                	showsVeriticalScrollIndicator={true}
                	enableEmptySections={true}
                	initialListSize={1}>
                </ListView>
			);
		}
	}

	_renderRow(){

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
						multiline={true}>
					</TextInput>
					<TouchableOpacity
						onPress={()=>this._postComment()}>
						<Image style={styles.upLoadStyle} source={Upload} />
					</TouchableOpacity>
				</View>
			</View>
			
		);	
	}

}

const styles = StyleSheet.create({
	containerStyle:{
		flex:1,
		marginTop:0, 
		bottom:0, 
		justifyContent:'center',
		backgroundColor:'#f5f5f5',
	},
	noRecordStyle:{
		height:80,
		width:80,
		alignSelf:'center',
	},
	noRecordTextStyle:{
		marginTop:20,
		fontSize:15,
		color:'#222222',
		textAlign:'center',
		alignSelf:'center',
	},
	commentStyle:{
		position:'absolute',
		bottom:0,
		height:50,
		left:0,
		right:0,
		backgroundColor:'#ffffff',
		flexDirection:'row',
	},
	commentTextInputStyle:{
		marginTop:0,
		marginLeft:10,
		height:45,
		width:320,
	},
	upLoadStyle:{
		marginRight:10,
		marginTop:10,
		height:25,
		width:25,
	}

})
