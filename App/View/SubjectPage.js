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
    View,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';

import ScrollTabBarNavigator from '../Component/ScrollTabBarNavigator';
import TitleNavigator from '../Component/TitleNavigator';
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
            <View style={{flex:1}}>
                <TitleNavigator title={this.props.title}/>
                <View style={styles.containerStyle}>
                    <ScrollTabBarNavigator navigator={this.props.navigator}/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        marginTop:0, 
        bottom:0, 
        backgroundColor:'#f5f5f5',
    },
})
