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
     jumpToFirst() {
        const{ navigator } = this.props;
        if(navigator){
            navigator.pop();
        };
    }

    render() {
        return (<View>
            <TouchableOpacity
                onPress={()=>this.jumpToFirst.bind(this)}>
                <Text style={{fontSize:20,color: 'red',margin:30}}>这是第1个页面，点击可以回到上个页面</Text>
                <Text style={{fontSize:20,color: 'red',marginTop:10, marginLeft: 30}}>获得的参数：id={ this.state.id }</Text>
            </TouchableOpacity>
        </View>);
    }

}
