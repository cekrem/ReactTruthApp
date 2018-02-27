import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


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
  },

  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

})

export default Truth