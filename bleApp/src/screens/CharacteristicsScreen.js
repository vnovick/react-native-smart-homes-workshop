import React from 'react'
import { Platform, View, Text, Button, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import LottieView from 'lottie-react-native'
import { inject, observer } from 'mobx-react'
import { Card, List, ListItem, Avatar } from 'react-native-elements'


@inject('bluetoothStore')
@observer
export class CharacteristicsScreen extends React.Component {

  static navigationOptions = {
    title: 'Characteristics',
  }


  getServicesList() {
    console.log(this.props.bluetoothStore.services)
    return (
        <List>
          { this.props.bluetoothStore.services.map(service => (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('characteristics', { service })}}>
              <ListItem title={service.uuid} />
            </TouchableOpacity>
          ))}
        </List>
    )
  }

  renderContent(device) {
    return (
      <View>  
        <Card>
          <Text>id: {device.id}</Text>
          <Text>name: {device.name}</Text>
          <Text>Status: {this.props.bluetoothStore.status}</Text>
          <Button title="Discover Services" onPress={() => this.props.bluetoothStore.discoverServices() }/>
        </Card>
        { this.props.bluetoothStore.services ? 
          this.getServicesList() :
          <ActivityIndicator />
        }
      </View>
    )
  }


  render() {
    const { service } = this.props.navigation.state.params
    return (
      <ScrollView style={{paddingBottom: 100 }} contentContainerStyle={{justifyContent: 'flex-start', paddingHorizontal: 16  }}>
        <View>  
        <Card>
          <Text>uuid: {service.uuid}</Text>
          <Text>id: {service.id}</Text>
          <Text>Status: {this.props.bluetoothStore.status}</Text>
          <Button title="Discover Characteristics" onPress={() => this.props.bluetoothStore.discoverCharacteristics(service) }/>
        </Card>
        <Card>
          { this.props.bluetoothStore.characteristics.map((characteristic, index) => (
            Object.keys(characteristic).map(key => {
              const value = characteristic[key]
              if (typeof value !== "object") {
                return <Text key={`${characteristic.uuid}-${index}-${key}`}>{`${key}: ${value || null}`}</Text>
              }
            })
          ))}
        </Card>
        </View>
      </ScrollView>
    )
  }
}