import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';
const mWidth = Dimensions.get('window').width;


var styles = StyleSheet.create({
    listViewStyle:{
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
        height:230,
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
        marginLeft: 10,
        fontSize:14,
        color:'#222222',
        textAlign:'left',
        alignSelf:'center',
    },
    topicTitleStyle:{
        marginTop:10,
        marginLeft:10,
        marginRight:30,
        fontSize:16,
        fontWeight:'bold',
        color:'#222222',
    },
    subjectStatusStyle:{
        marginTop:5,
        marginLeft:10,
        fontSize:12,
        color:'#666666',
        textAlign:'left',
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
        fontSize:13,
        lineHeight:18,
        color:'#222222'
    },
    topicActionStyle:{
        marginLeft:0,
        height:100, 
        width:240, 
        flexDirection:'column',
    },
    retailPriceStyle:{
        marginTop:20,
        marginLeft:15,
        fontSize:17,
        color:'#ff0000',
        textAlign:'left',
        fontWeight:'500',
    },
    subscribeStyle:{
        position:'absolute',
        marginTop:15,
        right:10,
        height:30,
        width:80,
        backgroundColor:'#ff0000',
        borderRadius: 5,
        justifyContent:'center',
    },
    subscribeActionStyle:{
        flexDirection:'row', 
        marginTop:0, 
        marginLeft:0, 
    },
    subscribeTextStyle:{
        fontSize:14, 
        color:'#ffffff', 
        fontWeight:'500', 
        textAlign:'center',
        backgroundColor:'rgba(225,225,225,0)'
    },
   
})

module.exports = styles;