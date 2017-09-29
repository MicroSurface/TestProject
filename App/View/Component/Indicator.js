/**
 * Rolling Banner Component
**/

'use strict';

import React,{Component} from 'react';
import {
	AppRegistry,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    View
} from 'react-native';

import Dimensions from 'Dimensions';

const mWidth = Dimensions.get('window').width;

export default class Indicator extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.initActivePointPosition();
	}

	static defaultProps = {
		activePointColor: '#ffffff',
		bottomPointsColor: '#aaaaaa',
	}

	initActivePointPosition() {
		//计算移动点的方位
		let pointWidth = this.props.pointCount * 6 + (this.props.pointCount - 1) * 4;
		this.rightX = pointWidth+(mWidth - pointWidth) / 2;
	}

	renderActivePoint() {
		return (
			<View 
				style={[
					styles.activePointStyle,
					styles.activePoint,
					{right: this.rightX, backgroundColor: this.props.activePointColor}]}
					ref={(ref)=>{this.indicator = ref}}>
			</View>
		);
	}

	renderBottomPoints() {
		let points = [];
		for (let i = 0; i < this.props.pointCount; i++){
			points.push(<View key={i} style={[styles.pointStyle, {backgroundColor: this.props.bottomPointsColor}]}/>)
		}
		return points;
	}

	render() {
		return (
			<View style={styles.container}>
				{this.renderBottomPoints()}
				{this.renderActivePoint()}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
        width: mWidth,
        height: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0)',
        bottom: 0
    },
    pointStyle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginLeft: 4,
        marginRight: 4,
    },
    activePointStyle: {
    	width: 8,
        height: 8,
        borderRadius: 5,
        marginLeft: 4,
        marginRight: 4,
    },
    activePoint: {
    	justifyContent:'center',
        position: 'absolute',
        bottom: 6,
    }
});

module.exports = Indicator;

