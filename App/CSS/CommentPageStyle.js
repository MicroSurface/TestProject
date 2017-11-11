import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';
const mWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	containerStyle:{
		flex:1,
		marginTop:50, 
		bottom:50, 
		backgroundColor:'#f5f5f5',
	},
	reminderStyle:{
		marginTop:0, 
		height:500, 
		justifyContent:'center',
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
		shadowColor:'#dfdfdf',
	    shadowOffset:{h:-3,w:0},
	    shadowRadius:3,
	    shadowOpacity:0.8,
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
	},
	listViewStyle:{
		marginTop:0,
		left:0,
		right:0,
		height:100,
		backgroundColor:'#ffffff',
		flexDirection:'row',
	},
	headImageStyle:{
		marginTop:20,
		marginLeft:20,
		height:30,
		width:30,
		borderRadius:15,
	},
	userInfoStyle:{
		flexDirection:'column',
		marginLeft:0, 
		width:280, 
		height:100,
	},
	nickNameStyle:{
		marginTop:15,
		marginLeft:20,
		fontSize:18,
		color:'#1E90FF',
		textAlign:'left',
	},
	commentContentStyle:{
		marginTop:5,
		marginLeft:20,
		fontSize:15,
		color:'#222222',
		textAlign:'left',
	},
	dateStyle:{
		marginTop:15,
		marginLeft:20,
		fontSize:10,
		color:'#666666',
		textAlign:'left',
	},
	separateLineStyle:{
		backgroundColor:'#dfdfdf',
		height:1, 
		marginTop:0,
		marginLeft:10, 
		marginRight:10,
	},

})

module.exports = styles;