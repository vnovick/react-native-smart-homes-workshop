import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { CONTAINER, TEXT, BOLD, colors, spacing } from '../theme';

export class BridgeComponent extends Component {
  render() {
    return (
      <View style={[CONTAINER, styles.bridgeContainer ]}>
        <View>
          <Text style={[TEXT, BOLD]}>Philips Hue Bridge</Text>
          <Text style={[TEXT, styles.decription]}>IP: {this.props.data.internalipaddress}</Text>
        </View>
        <Button title="Connect" onPress={this.props.bridgeAuthenticate}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bridgeContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: spacing[4], 
    padding: spacing[4],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.primary
  },
  decription: {
    paddingTop: spacing[2]
  }
})