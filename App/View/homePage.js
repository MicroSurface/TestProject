import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View
} from 'react-native'

import secondPage from './secondPage'

var RollingBanner = require('./Component/rollingBanner')


export default class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: null
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
        return (<View>
            <TouchableOpacity
                onPress={this.jumpToSecond.bind(this)}>
                <Text style={{fontSize:20,color: 'red',margin:30}}>This is first page and click to get next</Text>
                <Text style={{fontSize:20,color: 'red',marginTop:10, marginLeft: 30}}>parament:id={ this.state.id }</Text>
            </TouchableOpacity>
        </View>);
    }

}
