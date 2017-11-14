import React, {Component} from 'react';
import {
    AsyncStorage,
} from 'react-native';
import Storage from 'react-native-storage';

var storage = new Storage({
	//最大容量
	size:1000,
	//存储引擎
	storageBackend: AsyncStorage,
	// 数据过期时间
	defaultExpires: null,
	enableCache: true,
})

global.storage = storage;