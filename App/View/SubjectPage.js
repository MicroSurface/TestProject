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

var ScrollTabBarNavigator = require('../Component/ScrollTabBarNavigator');

const mWidth = Dimensions.get('window').width;


export default class SubjectPage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // this._fetchData();
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollTabBarNavigator/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        position:'absolute', 
        top:20, 
        bottom:50, 
        backgroundColor:'#f5f5f5',
    },
    scrollViewStyle:{
        backgroundColor:'#FFE4B5', 
        width:mWidth*0.25,
    }
})
