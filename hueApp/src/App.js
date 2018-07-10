/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AsyncStorage,
  Button
} from 'react-native';
import RootNavigator from './rootNavigator';
import './config/ReactotronConfig'
import { SCREEN, FOOTER } from './theme';
import hueStore from './stores/hueStore';
import { Provider } from 'mobx-react';
import { setTopLevelNavigator } from './services/navigationService';
import { navigate } from './services/navigationService';

//$FlowFixMe
console.ignoredYellowBox = ['Warning: isMounted'];

type Props = {};
export default class App extends Component<Props> {
  
  navigatorRef = {
    navigate: () => {}
  }
  
  render() {
    return (
      <Provider store={new hueStore()}>
        <View style={SCREEN}>
          <StatusBar barStyle="light-content"/>
          <RootNavigator 
            ref={navigatorRef => {
              setTopLevelNavigator(navigatorRef)
              this.navigatorRef = navigatorRef
            }}
          />
          <View style={FOOTER}>
            <Button title="clear cache" onPress={() => {
              AsyncStorage.clear()
              navigate('Home')
            }}/>
          </View>
        </View>
      </Provider>
    );
  }
}