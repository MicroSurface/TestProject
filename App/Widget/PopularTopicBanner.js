'use strict';

import React,{Component} from 'react';
import {
	AppRegistry,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
import banner1 from '../Image/powerAdd.png';
import banner2 from '../Image/customizedSurround.png';
import banner3 from '../Image/IOuser.png';
import banner4 from '../Image/useful skill.png';
import banner5 from '../Image/Buy iphone8.png';

const mWidth = Dimensions.get('window').width;

export default class PopularTopicBanner extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View>
				<View style={{flexDirection:'row',width:mWidth,height:120,marginTop:10,backgroundColor:'#f5f5f5'}}>
					<TouchableOpacity style={{height:120, width:mWidth*0.5, justifyContent:'center', alignSelf:'center'}}>
						<Image style={{height:120, width:mWidth*0.5}} source={banner1}/>
					</TouchableOpacity>
					<View style={{flexDirection:'column',height:120, marginLeft:5, width:mWidth*0.5-5, backgroundColor:'#ffffff'}}>
						<TouchableOpacity style={{height:57.5,justifyContent:'center', alignSelf:'center'}}>
							<Image style={{height:57.5, width:mWidth*0.5-5}} source={banner2} />
						</TouchableOpacity>
						<TouchableOpacity style={{marginTop:5, height:57.5}}>
							<Image style={{height:57.5, width:mWidth*0.5-5}} source={banner3} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{flexDirection:'row', width:mWidth, height:120, marginTop:5, backgroundColor:'#f5f5f5'}}>
					<TouchableOpacity style={{height:120, width:mWidth*0.3}}>
						<Image style={{height:120, width:mWidth*0.3}} source={banner4} />
					</TouchableOpacity>
					<TouchableOpacity style={{height:120, marginLeft:5, width:mWidth*0.7-5,backgroundColor:'#77FFEE'}}>
						<Image style={{height:120, width:mWidth*0.7-5}} source={banner5} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

module.exports = PopularTopicBanner;