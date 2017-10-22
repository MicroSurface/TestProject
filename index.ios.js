/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Navigator,
} from 'react-native-deprecated-custom-components';

import AV from 'leancloud-storage';
AV.initialize("xzF4HavabiRfEU2eKvLnvpU9-gzGzoHsz","YpykRlmTqtTSlLA1t32SywUt");

import LogIn from './App/View/LogIn';

export default class TestProject extends Component {

  render() {
    var defaultName='LogIn';
    var defaultComponent = LogIn;
    return(
      <Navigator
      /* 初始化路由 */
      initialRoute={{name: defaultName, component: defaultComponent}}
      /* 配置跳转动画 */

      configureScene={(route) => {
        return Navigator.SceneConfigs.PushFromRight;
      }}

      /*渲染场景*/
      renderScene={(route, navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />
      }} />
    )
  }
}


AppRegistry.registerComponent('TestProject', () => TestProject);
