import { View, Text, Platform } from 'react-native';
import React, { Component } from 'react';
import { SCREEN } from '../theme';
import LottieView from 'lottie-react-native'

export class SplashScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.animation.play()
    setTimeout(() => {
      this.props.navigation.navigate('DevicesListScreen')
    }, 2000)
  }

  render() {
    return (
      <View style={SCREEN}>
        <LottieView
          ref={animation => (this.animation = animation)}
          imageAssetsFolder="images"
          source={require('../assets/lottie-data/splash-data.json')}
        />
      </View>
    )
  }
}