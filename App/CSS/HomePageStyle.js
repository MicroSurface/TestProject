import React, {Component} from 'react';
import {
    StyleSheet,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';
const mWidth = Dimensions.get('window').width;

var styles = StyleSheet.create({
    scrollViewStyle:{
        position:'absolute',
        flex:1,
        top:(Platform.OS == 'ios') ? 20 : 0,
        bottom:50,
        backgroundColor:'#f5f5f5'
    },
    headerStyle:{
        marginTop:0,
        flexDirection:'row',
        width:mWidth, 
        height:70, 
        backgroundColor:'#ffffff'
    },
    headerImageStyle:{
       marginTop:20, 
       marginLeft:20, 
       height: 30, 
       width: 30
    },
    headerTitleStyle:{
        marginTop:15, 
        flexDirection:'column', 
        marginLeft: 15, 
        width:180
    },
    headerUserStyle:{
        marginTop:0, 
        marginLeft:0, 
        fontSize:16, 
        color:'#222222',
        fontWeight:'bold',
    },
    headerInfoStyle:{
        marginTop:10, 
        marginLeft:0, 
        fontSize:12, 
        color:'#666666'
    },
    headerConcernStyle:{
        position:'absolute',
        marginTop:20,
        right: 15, 
        height:30, 
        width:60, 
        backgroundColor:'#0066FF', 
        borderRadius:5, 
        justifyContent:'center'
    },
    headerConcernTitleStyle:{
        fontSize:14, 
        color:'#ffffff', 
        textAlign:'center'
    },
    headerLineStyle:{
        marginTop:0, 
        width:mWidth, 
        height:1, 
        backgroundColor:'#dfdfdf'
    },
    rowDataStyle:{
        marginTop:10,
        height:180,
        backgroundColor: '#ffffff',
    },
    rowDataADStyle:{
        marginTop:10,
        height:300,
        backgroundColor:'#ffffff',
    },
    rowDataADContainerStyle:{
        marginTop:15,
        marginLeft:0,
        height:230, 
        width:mWidth,
    },
    rowDataADSingleViewStyle:{
        backgroundColor:'#ffffff', 
        marginLeft:20, 
        marginTop:0, 
        height:195, 
        width:150, 
        borderWidth:1,
        borderRadius:2,
        borderColor:'#dfdfdf',
    },
    rowDataADTopicImgStyle:{
        marginTop:15,
        height:40,
        width:40,
        alignSelf:'center',
    },
    rowDataTopicTitleStyle:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        lineHeight:15,
        fontSize:12,
        color:'#222222',
        fontWeight:'bold',
        textAlign:'center',
        alignSelf:'center',
    },
    rowDataTopicSourceStyle:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        fontSize:11,
        color:'#666666',
        textAlign:'center',
        alignSelf:'center',
    },
    rowDataTopicTagStyle:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#dfdfdf',
        borderRadius:2,
        justifyContent:'center',
        alignSelf:'center',
    },
    rowDataTagStyle:{
        marginTop:5,
        marginBottom:5,
        marginLeft:5,
        marginRight:5,
        fontSize:11,
        color:'#666666',
        textAlign:'center',
        alignSelf:'center',
    },
    clickToCheckViewStyle:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        width:100,
        borderColor:'#1E90FF',
        borderRadius:2,
        borderWidth:1,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignSelf:'center',
    },
    clickToCheckTextStyle:{
        marginTop:5,
        marginBottom:5,
        fontSize:12,
        color:'#1E90FF',
        textAlign:'center',
        alignSelf:'center',
    },
    rowDataTitleStyle:{
        marginTop: 10,
        marginLeft: 20,
        marginRight:20,
        fontSize:15,
        fontWeight:'bold',
        color:'#222222',
    },
    rowDataTextStyle:{
        marginTop:10,
        marginLeft: 20,
        marginRight: 20,
        fontSize:13,
        height:55,
        lineHeight:18,
        color:'#666666',
    },
    headShadeStyle:{
        marginTop:0,
        height:40,
        width:40,
        alignSelf:'center',
    }
})

module.exports = styles;