import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

import secondPage from './secondPage';

import banner1 from './Image/High Sierra.jpg';
import banner2 from './Image/Yosemite.jpg';
import banner3 from './Image/Sierra.jpg';
import banner4 from './Image/El Capitan.jpg';

var RollingBannerTest = require('./Component/RollingBannerTest');


export default class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: null,
        };
    }

    componentDidMount(){
        //这里获取从Login页面传递过来的参数：id
        this.setState({
            id: this.props.id
        });
    }

     /**
     * 跳转到下一个页面
     */
     jumpToSecond() {
        const{ navigator } = this.props;
        if(navigator){
            navigator.push({
                name: 'seondPage',
                component: secondPage,
                params: {
                    message: "TestParament"
                }
            });
        }
    }

    render() {
        return (
            <View>
               <RollingBannerTest bannerList={[banner1,banner2,banner3,banner4]}/>
            </View>
        );
    }

}
