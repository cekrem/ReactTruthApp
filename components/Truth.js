import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Truth = ({color, text}) => (
  <View style={[styles.layout, {backgroundColor: color}]}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'whitesmoke',
    fontSize: 24,
    padding: 12,
    margin: 24,
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'roboto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 3
  },

  layout: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 128,
    paddingTop: 128
  },

})

export default Truth