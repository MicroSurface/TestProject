import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    ListView,
    TouchableOpacity,
    Text,
    ScrollView,
    View
} from 'react-native'

import Dimensions from 'Dimensions';

// import secondPage from './secondPage';

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
           statistics:{aa:["sd","syue"], bb:["sa","sj"], cc:["aak","iu"], dd:["aak","iu"],ee:["aak","iu"]},
        };
    }

    componentDidMount(){
        //这里获取从Login页面传递过来的参数：id
        this.setState({
            id: this.props.id
        });
    }

    _renderRow(rowData, rowId, sectionId){
        return(
           <View style={{marginTop:10, height:100, backgroundColor: '#ffffff', justifyContent:'center'}}>
                <Text style={{marginLeft:10}}>{rowData + '   ' + sectionId}</Text>
           </View>
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
                style={{position:'absolute', flex:1, top:20, bottom:50, backgroundColor:'#f5f5f5'}}
                showsVerticalScrollIndicator={false}>
                <RollingBannerTest bannerList={[banner1,banner2,banner3,banner4]} />
                <QuickVisitBanner  iconList={[
                    {image:icon1,title:"回答"},
                    {image:icon2,title:"视频"},
                    {image:icon3,title:"专栏"},
                    {image:icon4,title:"收藏夹"},
                    {image:icon5,title:"我的积分"}]}/>
                <PopularTopicBanner />
                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, rowId, sectionId)}
                    showsVerticalScrollIndicator={false}>
                </ListView>
            </ScrollView>            
        );
    }

}

