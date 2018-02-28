import React from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'

const Truth = ({color, text}) => (
  <View style={[styles.layout, {backgroundColor: color}]}>
    <Text style={styles.text}>
      {text}
    </Text>
    <View style={styles.buttonWrapper}>
      <Button onPress={() => null} color={color} title='Amen √'/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 20,
    marginBottom: 40,
    color: 'whitesmoke',
    fontSize: 24,
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'roboto',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },

  buttonWrapper: {
    padding: 20,
    margin: 100,
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },

  layout: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },

})

export default Truth