import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator,
    ListView,
    RefreshControl,
    TouchableOpacity,
    Text,
    Image,
    Button,
    ScrollView,
    View,
    Platform,
} from 'react-native'

import Dimensions from 'Dimensions';
const mWidth = Dimensions.get('window').width;
import styles from '../CSS/ChargeSubjectListViewStyle';

export default class ChargeSubjectListView extends Component {
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged:(r1, r2) => r1 !== r2,
            sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
        });

        this.state = {
            dataSource:ds,
            statistics:{},
            refreshing:true,
        };
    }

    componentDidMount(){
        this._getChargeSubjectData();
    }

    _getChargeSubjectData(){
        let url = "https://leancloud.cn/1.1/classes/ChargeSubject";
        fetch(url, {
            method:'GET',
            headers:{
                'X-LC-Id':'xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz',
                'X-LC-Key':'YpykRlmTqtTSlLA1t32SywUt',
                'Content-Type':'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({statistics:responseData, refreshing:false})
        })
    }

    
    _renderRow(rowData,sectionId, rowId){
        return(
            <View style={styles.subjectListStyle}>
                <View style={styles.headTitleStyle} >
                    <Image style={styles.headImgStyle} source={{uri:rowData.headImageUrl}} />
                   
                    <Text style={styles.nickNameStyle}>{rowData.userNickName}</Text>
                </View>
                {this._renderLine()}
                <Text numberOfLines={1} style={styles.topicTitleStyle}>{rowData.topicTitle}</Text>
                {this._showSubjectStatus(rowData.subjectStatus, rowData.subjectIssue)}
                <View style={styles.topicStyle}>
                    <Image style={styles.topicImgStyle} source={{uri:rowData.topicPictureUrl}} />
                    <View style={styles.topicActionStyle}>
                        <Text numberOfLines={3} style={styles.topicTextStyle} >{rowData.briefText}</Text>
                        <View style={styles.subscribeActionStyle}>
                            <Text style={styles.retailPriceStyle}>¥ {rowData.retailPrice}</Text>
                            <TouchableOpacity style={styles.subscribeStyle}>
                                <Text style={styles.subscribeTextStyle}>订阅</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>            
        );
    }

    _renderLine(){
        return(
            <View style={styles.headerLineStyle} />
        );
    }

    _showSubjectStatus(_status, _issue){
        if (_status == 'completed'){
            return(
                 <Text style={styles.subjectStatusStyle}>已完结，共{_issue}期</Text>
            );
        }else if (_status == 'beContinued'){
            return(
                 <Text style={styles.subjectStatusStyle}>连载中，更新至{_issue}期</Text>
            );
        }
    }

    render(){
        return(
            <ScrollView style={styles.listViewStyle}
                  refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>this._getChargeSubjectData()} />
                    }>
                <Image style={styles.subjectBannerStyle} source={require('../Image/ChargeSubjectBanner.png')}/>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.statistics)}
                    renderRow={(rowData, sectionId, rowId) => this._renderRow(rowData, sectionId, rowId)}
                    showsVerticalScrollIndicator={false}
                    enableEmptySections={true}>
                </ListView>
            </ScrollView>
        )
    }

}


module.exports = ChargeSubjectListView;