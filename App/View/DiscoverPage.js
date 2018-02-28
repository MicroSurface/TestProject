import React, {Component} from 'React';
import {
	StyleSheet,
	ListView,
	TouchableOpacity,
	RefreshControl,
	View,
	FlatList,
	Text,
	Image,
	Platform,
} from 'react-native';

import TitleNavigator from '../Component/TitleNavigator';
import DefautHeader from '../Image/Icons/icon_default_header.png';

export default class DiscoverPage extends Component {
	constructor(props){
		super(props);

		// var ds = new ListView.DataSource({
		// 	rowHasChanged:(r1, r2) => r1 !== r2,
		// 	sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
		// })

		// this.state = {
		// 	dataSource:ds,
		// 	refreshing:true,
		// }


	}

	_renderItem(){
		return(
			<View style={styles.container}>
				<View style={styles.titleArea}>
					<Image style={styles.headImage} source={DefautHeader} />
					<View style={styles.titleContent} >
						<Text style={styles.titleText}>太空精酿</Text>
						<Text style={styles.titleSource}>微博：太空精酿</Text>
					</View>
				</View>
			</View>
		)
	}

	render(){
		return(
			<View style={{flex:1}}>
				<TitleNavigator title={this.props.title} />
				<View style={styles.flatList}>
					<FlatList
					  data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'}]}
					  ItemSeparatorComponent={()=> <View style={{height:1, width:320, backgroundColor:'#222222'}}></View>}
					  renderItem={({item}) => this._renderItem()}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	flatList:{
		flex:1,
		marginTop:0,
		bottom:0,
	},
	container:{
		marginTop:0,
		height:500
	},
	titleArea:{
		marginTop:0,
		height:60,
		left:0,
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center'
	},
	headImage:{
		height:40,
		width:40,
		borderRadius:20,
		marginLeft:10,
	},
	titleContent:{
		flexDirection:'column',
		marginLeft:10
	},
	titleText:{
		color:'#222222',
		fontWeight:'bold'
	},
	titleSource:{
		marginTop:5,
		color:'#666666'
	}


})




