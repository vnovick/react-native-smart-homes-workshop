import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { CONTAINER, TITLE, TEXT, spacing } from '../theme';

export const LoaderComponent = ({ styles: externalStyles = {}, title }) => (
  <View style={[CONTAINER, styles.centered, externalStyles]}>
    <Text style={TITLE}>{title}</Text>
    <ActivityIndicator size="large" style={styles.indicator}/>
  </View>
)

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  indicator: {
    paddingTop: spacing[4]
  }
})