import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import common from '../styles/common'

const Truth = ({color, text}) => (
  <View style={[common.fullscreen, {backgroundColor: color}]}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
})

export default Truth