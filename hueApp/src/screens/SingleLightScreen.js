import React, { Component } from 'react'
import { View, Text, ScrollView, Slider, StyleSheet } from 'react-native';
import { LightComponent } from '../components';

import { 
  SCREEN, CONTAINER, TITLE, TEXT, colors, HEADER_TITLE 
} from '../theme';
import { observer, inject } from 'mobx-react';
import { ColorPicker } from 'react-native-color-picker'
import { hex_to_xy } from '../utils/hueColorUtil';

@inject('store')
@observer
export class SingleLightScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('lightBulbName')
    }
  }

  getColorPicker() {
    //TODO: Bonus - change color state for hue color space. Use hex_to_xy util
    return (
      <ColorPicker
        defaultColor={"ffff00"}
        onColorSelected={color => 
          alert(color)
        }
        style={styles.colorPicker}
        hideSliders
      />
    )
  }


  render() {
    return (
      <ScrollView style={SCREEN}>
          <LightComponent data={this.props.store.activeLightBulb} onChangeState={
              //TODO: Change light state by calling respective function on a store
              (state) => {
                alert(state)
              }
            }
          >
            <Slider 
              minimumValue={0}
              maximumValue={255}
              value={this.props.store.activeLightBulb.state.bri}
              onSlidingComplete={(value) => this.props.store.changeLightState(this.props.store.activeLightBulb.id, {
                bri: Math.round(value)
              })} />
              { this.props.store.activeLightBulb
                  .config.archetype === "sultanbulb" && 
                  this.getColorPicker() 
              }
          </LightComponent>
          <Text style={TEXT}>
            {
              JSON.stringify(this.props.store.activeLightBulb,4,4)
            }
          </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  colorPicker: {
    flex: 1,
    width: '100%',
    height: 300,
    paddingLeft: 15,
    paddingRight: 15
  }
})