import { 
  View, TouchableOpacity, ScrollView, Text, Platform, Button,
  StyleSheet
} from 'react-native';
import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion'
import LottieView from 'lottie-react-native'
import { Header } from '../components';
import { SCREEN, SCROLL_SCREEN, CONTAINER, HEADER_TITLE, TEXT, BOLD, colors } from '../theme';
import { Card, ListItem} from 'react-native-elements';
import { inject, observer } from 'mobx-react';

@inject('bluetoothStore')
@observer
export class DevicesListScreen extends Component {

  static navigationOptions = {
    header: null
  }

  scan() {
    this.animation.play()
    this.props.bluetoothStore.scanDevices()
  }

  renderHeader(device) {
    return (
      <ListItem key={device.id} title={device.name} subtitle={device.id} 
        containerStyle={CONTAINER}
        subtitleStyle={TEXT}
        titleStyle={HEADER_TITLE}
      />
    )
  }

  connectAndNavigate(device) {
    this.props.bluetoothStore.connectDevice(device)
    this.props.navigation.navigate('Services')
  }
  

  renderContent(device) {
    return (
      <Card key={device.id}>
        { Object.entries(device).map((item, index) => (
          <Text key={`deviceKey-${device.id}-${index}`}>{`${item[0]}: ${item[1]}`}</Text>
        ))}
        <Button title="Connect" onPress={() => this.connectAndNavigate(device)} />
      </Card>
    )
  }


  render() {
    return (
      <ScrollView style={SCREEN}>
        <Header title="Scanner" />
        <View>
          <TouchableOpacity style={styles.scannerButton} onPress={() => this.scan()}>
            <LottieView
                ref={animation => (this.animation = animation)}
                imageAssetsFolder="images"
                source={require('../assets/lottie-data/scanner-data.json')}
              />
          </TouchableOpacity>
        </View>
        <Card title="Bluetooth State">
          <Text>{`Bluetooth State: ${this.props.bluetoothStore.bleState}`}</Text>
          <Text>{`Error State: ${this.props.bluetoothStore.deviceScanError}`}</Text>
        </Card>
        <Accordion 
          underlayColor={colors.palette.lightGray}
          sections={this.props.bluetoothStore.deviceList.toJS()}
          renderHeader={this.renderHeader}
          renderContent={(content) => this.renderContent(content)}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scannerButton: {
    height: 200 
  }
})