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
    return ``
  }


  @action
  async checkInitialSetup(){
    // TODO: retrieve "bridgeIp" and "userName" from AsyncStorage
    // TODO: If there are no bridge Ip or username - seacrch for bridge (this.searchForBridge) if there are set up observables and navigate to "Lights"
    // TODO: Bonus: check if bridge ip is not valid anymore
  }

  @action
  async searchForBridge(){
    /* TODO: 
     use Philips Hue UPNP discovery service to search for bridges (https://www.meethue.com/api/nupnp), 
     update "bridgeList" observable
     set loading as false
    */

    const blob = await fetch(`https://www.meethue.com/api/nupnp`);
    const response = await blob.json();
    
    this.bridgeList = response
    this.isLoading = false;
  }

  @action 
  async connectToBridge(bridge){
    /*TODO: Store bridge credentials in AsyncStorage ("bridgeIp")
     - set activeBridgeIP observable on the store
    */
  
    // TODO: call "getHueUserName" on the store
  }

  @action
  async getHueUserName() {
    //TODO: Get Hue user name 
    //TODO: Set username into AsyncStorage and store ("this.userName")
    //TODO: Navigate to Lights screen
  }

  @action
  async getLights(){
    //TODO: getLigts action - call Philips Hue Light API
    //TODO: Transform Lights object into Array and store in lightsList observable
  }

  @action
  async changeLightState(id, state){
    //TODO: change light state
    //TODO: Refetch lights after state change ("this.getLights")
  }


  // Navigate to SingleLightScreen
  @action
  setActiveLightBulb(item){
    this.activeLightBulbId = item.id;
    navigate('Light', { lightBulbName: this.activeLightBulb.name });
  }

}