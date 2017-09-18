import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text,
    View
} from 'react-native'
import login from './logIn'

export default class firstPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View>
            <Text style={{fontSize:20,color: 'red',margin:10}}>{this.props.text}</Text>
            <TouchableOpacity
                onPress={()=>this.jumpToFirst()}>
                <Text style={{fontSize:20,color: 'red',margin:10}}>这是第1个页面，点击可以回到上个页面</Text>
            </TouchableOpacity>
        </View>);
    }

    /**
     * 跳转到下一个页面
     */
    jumpToFirst() {
        /* push(route) 跳转到新的场景，并且将场景入栈，你可以稍后用jump forward 跳转回去*/
            this.props.navigator.push({
            component: login,
        });
    }
}