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

import banner1 from '../Image/High Sierra.jpg';
import banner2 from '../Image/Yosemite.jpg';
import banner3 from '../Image/Sierra.jpg';
import banner4 from '../Image/El Capitan.jpg';

import icon1 from '../Image/Icons/Answer.png';
import icon2 from '../Image/Icons/Video.png';
import icon3 from '../Image/Icons/Subject.png';
import icon4 from '../Image/Icons/Collect.png';
import icon5 from '../Image/Icons/Mypoints.png'

import pic1 from '../Image/Scence1.jpg';
import pic2 from '../Image/Scence2.jpg';
import pic3 from '../Image/Scence3.jpg';
import pic4 from '../Image/Scence4.jpg';
import pic5 from '../Image/Scence5.jpg';

import headShade from '../Image/Icons/icon_headshade03.png';

var RollingBannerTest = require('../Component/RollingBannerTest');
var TabNavigators = require('../Component/TabNavigator');
var QuickVisitBanner = require('../Component/QuickVisitBanner');
var PopularTopicBanner = require('../Widget/PopularTopicBanner');
var picList = [pic1, pic2, pic3, pic4, pic5];

const mWidth = Dimensions.get('window').width;

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
           dataSource: ds,
           statistics:{},
        };
    }

    componentDidMount(){
        //这里获取从Login页面传递过来的参数：id
        // this.setState({
        //     id: this.props.id
        // });
        this._fetchData();
    }

    _fetchData(){
        let response = require('../Statistics/TopicData');
        let responseData = response.Data;
        this.setState({statistics:responseData});
    }


    _renderHeader(sectionData, sectionId){
        for (let i in sectionData){
            if(sectionData && sectionId){
                return(
                    <View>
                        <View style={styles.headerStyle}>
                            <Image style={styles.headerImageStyle} source={icon1}/>
                            <View style={styles.headerTitleStyle}>
                                <Text style={styles.headerUserStyle}>来自话题：{sectionData[i].topicSource}</Text>
                                <Text style={styles.headerInfoStyle}> {sectionData[0].quantity}人关注，{sectionData[0].questionQuantity} 个问题</Text>
                            </View>
                            <TouchableOpacity style={styles.headerConcernStyle}>
                                <Text style={styles.headerConcernTitleStyle}>+ 关注</Text>
                            </TouchableOpacity>
                        </View>
                        {this._renderLine(sectionId)}
                    </View>
                )
            }
        }
        
    }

    _renderRow(rowData, rowId, sectionId){
        if (rowData.topicProps == "topic"){
            return(
                <View>
                   <View style={styles.rowDataStyle}>
                         <View style={styles.headerStyle}>
                            <Image style={styles.headerImageStyle} source={icon1}/>
                            <View style={styles.headerTitleStyle}>
                                <Text style={styles.headerUserStyle}>来自话题：{rowData.topicSource}</Text>
                                <Text style={styles.headerInfoStyle}> {rowData.quantity}人关注，{rowData.questionQuantity} 个问题</Text>
                            </View>
                            <TouchableOpacity style={styles.headerConcernStyle}>
                                <Text style={styles.headerConcernTitleStyle}>+ 关注</Text>
                            </TouchableOpacity>
                        </View>
                        {this._renderLine(sectionId)}
                        <Text numberOfLines={1} style={styles.rowDataTitleStyle}>{rowData.titles}</Text>
                        <Text numberOfLines={3} style={styles.rowDataTextStyle}>{rowData.textBody}</Text>
                   </View>
                </View>
            )
        }else if(rowData.topicProps == "advertise"){
            return(
                <View>
                   <View style={styles.rowDataADStyle}>
                         <View style={styles.headerStyle}>
                            <Image style={styles.headerImageStyle} source={icon1}/>
                            <View style={styles.headerTitleStyle}>
                                <Text style={styles.headerUserStyle}>来自话题：{rowData.topicSource}</Text>
                                <Text style={styles.headerInfoStyle}> {rowData.quantity}人关注，{rowData.questionQuantity} 个问题</Text>
                            </View>
                            <TouchableOpacity style={styles.headerConcernStyle}>
                                <Text style={styles.headerConcernTitleStyle}>+ 关注</Text>
                            </TouchableOpacity>
                        </View>
                        {this._renderLine(sectionId)}
                        {this._renderAdvertiseList(rowData, sectionId)}
                   </View>
                </View>
            )
        }
        
    }

    _renderAdvertiseList(rowData, sectionId){
        return(
            <View style={styles.rowDataADContainerStyle}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {this._renderAdvertiseContent(rowData.category)}
                </ScrollView>
            </View>
        )
    }

    _renderAdvertiseContent(rowData, sectionId){
        let arr = [];
        for (let i in rowData){
            arr.push(
                    <TouchableOpacity key={i} style={styles.rowDataADSingleViewStyle}>
                        <Image style={styles.rowDataADTopicImgStyle} source={picList[i]}>
                            <Image style={styles.headShadeStyle} source={headShade} />
                        </Image>
                        <Text numberOfLines={2} style={styles.rowDataTopicTitleStyle}>{rowData[i].topicTitle}</Text>
                        <Text numberOfLines={1} style={styles.rowDataTopicSourceStyle}>{rowData[i].topicSource}</Text>
                        <View style={styles.rowDataTopicTagStyle}>
                            <Text numberOfLines={1} style={styles.rowDataTagStyle}>{rowData[i].tag}</Text>
                        </View>
                        <View style={styles.clickToCheckViewStyle}>
                            <Text style={styles.clickToCheckTextStyle}>点击查看</Text>
                        </View>
                        
                    </TouchableOpacity> 
            );
        }
        return arr;
    }

    _renderLine(sectionId){
        return(
            <View style={styles.headerLineStyle}/>
        )
    }

     /**
     * 跳转到下一个页面
     */
    //  jumpToSecond() {
    //     const{ navigator } = this.props;
    //     if(navigator){
    //         navigator.push({
    //             name: 'seondPage',
    //             component: secondPage,
    //             params: {
    //                 message: "TestParament"
    //             }
    //         });
    //     }
    // }

    render() {
        return (
            <ScrollView
                style={styles.scrollViewStyle}
                showsVerticalScrollIndicator={false}>
                <RollingBannerTest bannerList={[pic1,pic2,pic3,pic4]} />
                <QuickVisitBanner  iconList={[
                    {image:icon1,titles:"回答"},
                    {image:icon2,titles:"视频"},
                    {image:icon3,titles:"专栏"},
                    {image:icon4,titles:"收藏夹"},
                    {image:icon5,titles:"我的积分"}]}/>
                <PopularTopicBanner />
                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, rowId, sectionId)}
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}>
                </ListView>
            </ScrollView>            
        );
    }

}

const styles = StyleSheet.create({
    scrollViewStyle:{
        position:'absolute',
        flex:1,
        top:20,
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

