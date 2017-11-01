import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    Button,
    View
} from 'react-native'

export default class NoNetworkRemindPage extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){

    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.refreshButtonStyle}>
                    <Text style={{fontSize:20, color:'#ff0000', textAlign:'center'}}>刷新</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        bottom:0,
        backgroundColor:'#efefef',
        justifyContent:'center',
    },
    refreshButtonStyle:{
        backgroundColor:'#ffffff',
        borderRadius:2,
    }
})

module.exports = NoNetworkRemindPage;