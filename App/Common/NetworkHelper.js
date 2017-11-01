import React, {Component} from 'react';
import {
    NetInfo,
} from 'react-native';

export default class NetworkHelper {
	checkNetwork(){
		NetInfo.isConnected.fetch().done((isConnected) => {
			isConnected ? true : false;
		});

		NetInfo.fetch().done((status) => {

		});
	}
}