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
    Animated,
    Image,
    Text,
    View
} from 'react-native';

import Dimensions from 'Dimensions';
var Indicator = require('./Indicator');

const mWidth = Dimensions.get('window').width;
const mHeight = Dimensions.get('window').height;

export default class RollingBannerTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.nextPage = 0;
		this.isAutoScroll = true;
	}

	componentDidMount() {
		this.startScroll();
	}

	componentWillUnmount() {
		this.scrollTimer && clearInterval(this.scrollTimer);
	}

	static defaultProps = {
		bannerList: [],
	}

	renderBanner() {
		let arr = [];
		for (let i in this.props.bannerList) {
			arr.push(<Image key={i} style={styles.imageStyle} source={this.props.bannerList[i]}/>);
		}
		return arr;
	}

	onScroll(event) {
		let offsetX = event.nativeEvent.contentOffset.x;
		this.nextPage = Math.round(offsetX / mWidth);
		this.nextPagePixel = offsetX / mWidth;

		//指示器滚动效果
		if (this.isAutoScroll) {
			this.ref.indicator.setNativeProps(
				{style:{right: this.ref.rightX - this.nextPage * 14}}
			)
		}else{
			this.ref.indicator.setNativeProps(
				{style:{right: this.ref.rightX - this.nextPagePixel * 14}}
			)
		}
	}

	onTouchStart() {
		this.isAutoScroll = false;
		if (this.scrollTimer) {
			clearInterval(this.scrollTimer);
		}
	}

	startScroll() {
		if (this.scrollTimer) {
			clearInterval(this.scrollTimer);
		}
		this.isAutoScroll = true;
		this.scrollTimer = setInterval(() => {
			this.scrollView.scrollTo({x: this.nextPage * mWidth}, true);
			this.nextPage++;
			if (this.nextPage >= this.props.bannerList.length) {
				this.nextPage = 0;
			}
		}, 2000);
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					pagingEnabled={true}
					onScroll={this.onScroll.bind(this)}
					onTouchStart={()=>this.onTouchStart()}
					onScrollEndDrag={()=>this.startScroll()}
					onTouchEnd={()=>this.startScroll()}
					ref={(ref)=>this.scrollView = ref}>
					{this.renderBanner()}
				</ScrollView>
				<Indicator 
					pointCount={this.props.bannerList.length}
					ref={(ref)=>this.ref=ref}>
				</Indicator>
			</View>
		);
	}

}

const styles = StyleSheet.create({
    container: {
        width: mWidth,
        height: mWidth * 0.5,
    },
    imageStyle: {
        width: mWidth,
        height: mWidth * 0.5,
    },
    indicatorStyle: {}
});


module.exports = RollingBannerTest;
