import React from 'react';
import { View, Text } from 'react-native';
import { HEADER, HEADER_TITLE } from '../theme';

export const Header = ({ title }) => (
  <View style={HEADER}>
    <Text style={HEADER_TITLE}>{title}</Text>
  </View>
)