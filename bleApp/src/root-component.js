import React from 'react'
import { View, StatusBar, Button, Platform, PermissionsAndroid } from 'react-native'
import RootNavigator from './rootNavigator';
import { inject, observer } from 'mobx-react'
import { SCREEN, FOOTER } from './theme';

@inject('bluetoothStore')
@observer
export class RootComponent extends React.Component {

  constructor(props) {
    super(props);
    props.bluetoothStore.setupBleManager()
  }

  async requestPermissions(){
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          'title': 'Access Location',
          'message': 'Location is crucial for the app'
        }
      )
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        alert("Abort an app. without bluetooth it won't work")
      } 
    } catch (err) {
      console.warn(err)
    }
  }

  componentDidMount(){
    if (Platform.OS === 'android') {
      this.requestPermissions()
    }
    this.props.bluetoothStore.subscribeToStateChange()
  }

  componentWillUnMount(){
    this.props.bluetoothStore.removeSubscription()
    this.props.bluetoothStore.destroyBleManager()
  }
 
  render() {
    return (
      <View style={SCREEN}>
        <StatusBar barStyle="light-content"/>
        <RootNavigator />
      </View>
    )
  }
}