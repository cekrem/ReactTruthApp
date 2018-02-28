import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

const Header = ({text}) => (
  <View style={styles.layout}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 32,
    color: 'whitesmoke',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontSize: 48,
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'roboto',
  },

  layout: {
    position: 'absolute',
    left:0,
    right: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

})

export default Header