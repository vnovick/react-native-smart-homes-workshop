import React from 'react'
import { Platform, View, Text, Button, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import LottieView from 'lottie-react-native'
import { inject, observer } from 'mobx-react'
import { Card, List, ListItem, Avatar } from 'react-native-elements'


@inject('bluetoothStore')
@observer
export class ServicesScreen extends React.Component {

  static navigationOptions = {
    title: 'Services',
  }

  getServicesList() {
    return (
        <List>
          { this.props.bluetoothStore.services.map((service, index) => (
            <TouchableOpacity key={`${service.uuid}-${index}`} onPress={() => {this.props.navigation.navigate('Characteristics', { service })}}>
              <Card>
                { 
                  Object.keys(service).map((key, index) => {
                    const value = service[key]
                    if (typeof value !== "object") {
                      return <Text key={`${service.uuid}-${index}-${key}`}>{`${key}: ${value || 'null'}`}</Text>
                    }
                  })
                }
              </Card>
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
    const { connectedDevice } = this.props.bluetoothStore
    return (
      <ScrollView style={{paddingBottom: 100 }} contentContainerStyle={{justifyContent: 'flex-start', paddingHorizontal: 16  }}>
        { connectedDevice ? this.renderContent(connectedDevice) : <ActivityIndicator />}
      </ScrollView>
    )
  }
}