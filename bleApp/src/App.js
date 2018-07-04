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
import './config/ReactotronConfig'
import { BluetoothStore } from './stores/bluetoothStore';
import { Provider } from 'mobx-react';
import { RootComponent } from './root-component';

//$FlowFixMe
console.ignoredYellowBox = ['Warning: isMounted'];

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <Provider bluetoothStore={new BluetoothStore()}>
        <RootComponent />
      </Provider>
    );
  }
}