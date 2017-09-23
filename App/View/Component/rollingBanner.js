'use strict';

import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity,
    Animated,
    Text,
    View
} from 'react-native';

import Dimensions from 'Dimensions';

var screenWidth = Dimensions.get('window').width;

export default class rollingBanner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: ['#dfe24a','#68eaf9','#ef9af9'],
			selectedImageIndex: 0,
			isNeedRun: true,
		};

		this._index = 0;
		this._max = this.state.image.length;
	}

	render(){
		let images = this.state.image.map((value, i) => {
			return (
				<TouchableWithoutFeedback >
					<View style={{width:screenWidth, height: 130, backgroundColor:value}}/>
				</TouchableWithoutFeedback>

			);
		})

		let circles = this.state.image.map((value, i) => {
			return (
				<View key={i} style={ (i == this.state.selectedImageIndex)? 
					styles.circlesSelected : styles.circle}/>
			);
		})

		let imageLength = this.state.image.length;
		let circleLength = 6 * imageLength + 5 * 2 * imageLength;
		let center = (screenWidth - circleLength) / 2;
		return (
			<View style={styles.container}>
				<ScrollView 
					horizontal = {true}
					showsHorizontalScrollIndicator = {false}
					onTouchStart = {() => this._onTouchStart()}
					onTouchMove = {() => console.log('onTouchMove')}
					onTouchEnd = {() => this._onTouchEnd()}
					onScroll = {() => this._onScroll()}
					ref = {(scrollView) => {this._scrollView = scrollView;}}>
					<Animated.View style={{flexDirection:'row'}}>{images}</Animated.View>
				</ScrollView>
				<View style={{flexDirection:'row', position: 'absolute', top: 115, left:center,
				}}>{circles}</View>
			</View>
		);
	}

	_onTouchStart() {
		clearInterval(this.timer);
	}

	_onTouchEnd() {
		this._scrollView.scrollTo({x:this._index * screenWidth}, true);
		this._refreshFocusIndicator();
		this._runFocusImage();
	}

	_onScroll() {
		this._contentOffsetX = this._scrollView.contentOffset.x;
		this._index = Math.round(this._contentOffsetX / screenWidth);
	}

	_runFocusImage() {
		if(this._max < 1){
			return;
		}
		this._timer = setInterval(function(){
			this._index++;
			if(this._index >= this._max) {
				this._index = 0;
			}
			this._scrollView.scrollTo({x:this._index * screenWidth}, true);
			this._refreshFocusIndicator();
		}.bind(this), 4000);
	}

	_stopFocusImage() {
		clearInterval(this.timer);
	}

	_refreshFocusIndicator() {
		this.setState({selectedImageIndex: this._index});
	}

	componentDidMount() {
		this._runFocusImage();
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	componentWillReceiveProps(nextProps) {

	}
}



const styles = {
    container: {
        flex:1,
        flexDirection:'row',
    },
    circleContainer: {
        position:'absolute',
        left:0,
        top:120,
    },
    circle: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'#f4797e',
        marginHorizontal:5,
    },
    circleSelected: {
        width:6,
        height:6,
        borderRadius:6,
        backgroundColor:'#ffffff',
        marginHorizontal:5,
    }
};

module.exports = rollingBanner;