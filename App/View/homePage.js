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

import styles from '../CSS/HomePageStyle';

import Dimensions from 'Dimensions';

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

import RollingBannerTest from '../Component/RollingBannerTest';
import TabNavigators from '../Component/TabNavigator';
import QuickVisitBanner from '../Component/QuickVisitBanner';
import PopularTopicBanner from '../Widget/PopularTopicBanner';

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
        let responseData = response.results;
        this.setState({statistics:responseData});
        // let url = "https://leancloud.cn/1.1/classes/Item/59ec309975657146412a4a5d"
        // fetch(url, {
        //     method:'GET',
        //     headers:{
        //         'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
        //         'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
        //         'Content-Type':'application/json',
        //     },
        // })
        // .then(function(response){
        //     return response.json();
        // }).then(function(data){
        //     console.log(data);
        // })
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

