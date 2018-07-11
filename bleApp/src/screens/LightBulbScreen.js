import React from 'react'
import { Platform, View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import { inject, observer } from 'mobx-react'
import LottieView from 'lottie-react-native'
import { Card, Button } from 'react-native-elements'
import { Buffer } from 'buffer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ColorPicker } from 'react-native-color-picker'
import { SCREEN, CONTAINER, colors } from '../theme';

//TODO: Fill relevant UUID and charecters by using NRF Connect and reverse engineering logs
const LEDBULUBNAME = ''
const LED_BULB_SERVICE_UUID = ''
const LED_BULB_SERVICE_CHAR = ''


@inject('bluetoothStore')
@observer
export class LightBulbScreen extends React.Component {

  state = {
    error: '',
    color: 'ffff00',
    on: false
  }

  static navigationOptions = {
    header: null
  }

  async setLightBulbColor(color){
    //TODO: Set lightbulb value according to reverse engineered format (Hint: Use Buffer package to send it as base64) Hint2: writeCharacteristicWithResponseForService
  }
  

  scanForDevices(){
    //TODO: Scan for devices
  }

  connectToLightBulb = async () => {
    //TODO: Connect to light bulb.
    // TODO: Important! There is 30 seconds connection limit for the sake other workshop attendees to be able to connect
  }

  toggleLightBulb = (color) => {
    if (this.state.on) {
      this.setState({
        on: false
      })
      this.setLightBulbColor("000000")
    } else {
      this.setState({
        on: true
      })
      this.setLightBulbColor(this.state.color)
    }
  }
  
  renderContent = () => (
    <View style={[SCREEN, styles.container]}>
      <View>
        <TouchableOpacity onPress={() => this.toggleLightBulb(this.state.color)}>
          <Icon name="lightbulb-o" size={200} 
            color={
              this.state.on ? 
              `#${this.state.color}` : 
              colors.palette.lighterGrey 
            } 
            style={CONTAINER} />
        </TouchableOpacity>       
      </View>
      <ColorPicker
        defaultColor={"ffff00"}
        onColorSelected={(color) => {
          const lightBulbColor = color.substring(1)
          if (this.state.on) {
            this.setLightBulbColor(lightBulbColor)
          }
          this.setState({
            color: lightBulbColor
          })
        }}
        style={styles.linearGradient}
      />
    </View>
  )

  get lightBulb(){
    //TODO: Return light bulb if exist
  }

  renderStatusView = () => (
    //TODO: Add scan for devices button
    //TODO: Disable button if no lightbulb found
    <View style={[SCREEN, styles.container]}>
      <Card title={this.state.error}>
        <Text>
          { 
            JSON.stringify(
              this.props.bluetoothStore.deviceList.map(device => device.id), 2, 2
            )
          }
        </Text>
        <Text>{this.lightBulb ? this.lightBulb.name : 'No Light Bulb found'}</Text>
        <Button
          title='Connect to LightBulb' 
          onPress={() => this.connectToLightBulb()}/>
      </Card>
    </View>
  )

  render() {
    return this.props.bluetoothStore.deviceReady ? this.renderContent() : this.renderStatusView()
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
    alignItems: 'center'
  },
  error: {
    backgroundColor: 'transparent',
    color: 'red',
    fontSize: 20
  },
  icon: {
    backgroundColor: 'transparent'
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }
});
