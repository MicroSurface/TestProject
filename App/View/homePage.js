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


var RollingBannerTest = require('../Component/RollingBannerTest');
var TabNavigators = require('../Component/TabNavigator');
var QuickVisitBanner = require('../Component/QuickVisitBanner');
var PopularTopicBanner = require('../Widget/PopularTopicBanner');

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
           // statistics:["h","e","l","l","o"]
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
        let response = require('../Statistics/Data');
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
        return(
            <View>
               <View style={styles.rowDataStyle}>
                    <Text numberOfLines={1} style={styles.rowDataTitleStyle}>{rowData.titles}</Text>
                    <Text numberOfLines={3} style={styles.rowDataTextStyle}>{rowData.textBody}</Text>
               </View>
            </View>
           
        )
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
                <RollingBannerTest bannerList={[banner1,banner2,banner3,banner4]} />
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
                    enableEmptySections={true}
                    renderSectionHeader={(sectionData, sectionId) => this._renderHeader(sectionData, sectionId)}>
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
        marginTop:10,
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
        marginTop:0,
        height:120,
        backgroundColor: '#ffffff', 
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
    

})

