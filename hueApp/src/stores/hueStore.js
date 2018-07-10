import { observable, action, computed } from 'mobx';
import { navigate } from '../services/navigationService';
import { AsyncStorage } from 'react-native';

export default class hueStore {
  
  @observable
  bridgeList = []

  @observable
  lightsList = []

  @observable
  activeBridgeIP = undefined

  @observable
  activeLightBulbId = null

  @observable
  userName = undefined

  @observable
  isLoading = true

  @computed
  get connectedBridge() {
    return this.bridgeList
      .filter((bridgeData) => bridgeData.internalipaddress === this.activeBridgeIP)
      .reduce(data => data)
  }

  @computed 
  get activeLightBulb(){
    return this.lightsList
      .filter(light => light.id === this.activeLightBulbId)
      .reduce(data => data)
  }

  @computed
  get baseApiUrl() {
    // TODO: Structure base api url
    return `${this.activeBridgeIP}/api/${this.userName}`
  }


  @action
  async checkInitialSetup(){
    // TODO: retrieve bridge IP and userName from AsyncStorage
    // TODO: If there are no bridge Ip or username - seacrch for bridge
    // TODO: Bonus: check if bridge ip is not valid anymore

    const bridgeIp = await AsyncStorage.getItem('bridgeIp');
    const userName = await AsyncStorage.getItem('userName');

    if (!bridgeIp && !userName) {
      this.searchForBridge()
    } else {
      this.userName = userName;
      this.activeBridgeIP = bridgeIp;
      navigate('Lights')
    }
  }

  @action
  async searchForBridge(){
    //TODO: use Philips Hue UPNP discovery service to search for bridges

    const blob = await fetch(`https://www.meethue.com/api/nupnp`);
    const response = await blob.json();
    
    this.bridgeList = response
    this.isLoading = false;
  }

  @action 
  async connectToBridge(bridge){
    //TODO: Store bridge credentials in AsyncStorage
    // TODO: get userName from Philips Hue api and update store username
    this.activeBridgeIP = bridge.internalipaddress;
    AsyncStorage.setItem('bridgeIp', this.activeBridgeIP);
    await this.getHueUserName()
  }

  @action
  async getHueUserName() {
    //TODO: Get Hue user name
    //TODO: Set username into AsyncStorage 
    //TODO: Navigate to Lights screen
    const blob = await fetch(`http://${this.activeBridgeIP}/api/`, {
      method: "POST",
      body: JSON.stringify({
        devicetype: "my_hue#Vladimir Novick"
      })
    })

    const response = await blob.json();

    if (response[0].error) {
      alert(response[0].error.description)
    } else {
      this.userName = response[0].success.username
      AsyncStorage.setItem('userName', this.userName);
      navigate('Lights')
    }
  }

  @action
  async getLights(){
    //TODO: getLigts action - call Philips Hue Light API
    //TODO: Transform Lights object into Array and store in bridgeList observable
    const blob = await fetch(`http://${this.baseApiUrl}/lights`);
    const response = await blob.json();
    this.lightsList = Object.entries(response).map(entry => ({
      id: entry[0],
      ...entry[1]
    }));
  }

  @action
  async changeLightState(id, state){
    //TODO: change light state
    //TODO: Refetch lights after state change
    const blob = await fetch(`http://${this.baseApiUrl}/lights/${id}/state`, {
      method: "PUT",
      body: JSON.stringify(state)
    })
    this.getLights();
  }


  // Navigate to SingleLightScreen
  @action
  setActiveLightBulb(item){
    this.activeLightBulbId = item.id;
    navigate('Light', { lightBulbName: this.activeLightBulb.name });
  }

}