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

const mWidth = Dimensions.get('window').width;


export default class SubjectPage extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
        // this._fetchData();
    }

    _renderView(){
    	let arr = [];
    	for(let i=1; i<20; i++){
    		arr.push(
    			<View key={i} style={{backgroundColor:'#00BFFF', height:50, marginTop:10}}>
    				<Text style={{fontSize:10, color:'#222222'}}/>
    			</View>
    		);
    	}
    	return arr;
    }

    render() {
        return (
        	<View style={styles.containerStyle}>
        		<ScrollView style={styles.scrollViewStyle}>
		           	{this._renderView()}
		        </ScrollView>    
        	</View>
        );
    }

}

const styles = StyleSheet.create({
	containerStyle:{
		flex:1,
		position:'absolute', 
		top:20, 
		bottom:0, 
		backgroundColor:'#f5f5f5',
	},
	scrollViewStyle:{
		backgroundColor:'#FFE4B5', 
		width:mWidth*0.25,
	}
})
