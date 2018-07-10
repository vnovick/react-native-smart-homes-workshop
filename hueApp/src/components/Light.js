import React, { Component } from 'react';
import { 
  View, 
  Button, 
  Text, 
  StyleSheet, 
  Switch, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { 
  CONTAINER, TEXT, HEADER_TITLE, BOLD, ROW, colors, spacing 
} from '../theme';


export const LightComponent = ({ data, onChangeState, onLightClick, children }) => (
  <TouchableOpacity onPress={() => onLightClick && onLightClick()}>
    <View style={[CONTAINER, styles.lightsContainer ]}>
      { data.state && 
        <View style={ROW}>
          <Icon 
            name={data.state.on ? "lightbulb-on" : "lightbulb-outline"} 
            size={30} 
            color={colors.palette.white}
          />
          <Text style={HEADER_TITLE}>{data.name}</Text>
          { data.config.archetype === 'sultanbulb' &&
            <Icon name="palette" size={30} color={colors.palette.white} />
          }
          { !data.state.reachable &&
            <Icon name="alert-outline" color={colors.palette.orangeDarker} size={20} />
          }
          <Switch value={data.state.on} onValueChange={() => {
            onChangeState({
              on: !data.state.on
            })
          }} />
        </View>
      }
      <View>
        { children }
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  lightsContainer: {
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