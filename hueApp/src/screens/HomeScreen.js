import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SCREEN, CONTAINER, HEADER, HEADER_TITLE, TEXT, TITLE } from '../theme';
import { BridgeComponent, LoaderComponent, Header } from '../components';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export class HomeScreen extends Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    //TODO: Check initial setup by calling action on the store
    this.props.store.checkInitialSetup()
  }


  _keyExctractor = (item, index) => item.id


  getBridgeList() {
    return (
      <View>
        <Header title="Philips Hue bridge list"/>
        <FlatList 
          data={this.props.store.bridgeList}
          renderItem={({item}) => 
            <BridgeComponent 
              data={item} 
              bridgeAuthenticate={() => this.props.store.connectToBridge(item)}/>
            }
          keyExtractor={this._keyExctractor}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={SCREEN}>
        { this.props.store.isLoading ? 
          <LoaderComponent title="Looking for a bridge" /> :
          this.getBridgeList() 
        }
      </View>
    )
  }
}
