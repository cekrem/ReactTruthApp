import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Header = ({text, style}) => (
  <View style={[styles.layout, style]}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  layout: {
    position: 'absolute',
    height: 128,
    backgroundColor: 'rgba(255,255,255,0.5)',
    left: 0,
    right: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  text: {
    textAlign: 'center',
    color: 'whitesmoke',
    fontSize: 48,
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'roboto',
  },
})

export default Header