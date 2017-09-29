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

import logIn from './App/View/logIn';

export default class TestProject extends Component {

  render() {
    var defaultName='logIn';
    var defaultComponent = logIn;
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
      }}/>
    );
  }
}


AppRegistry.registerComponent('TestProject', () => TestProject);
