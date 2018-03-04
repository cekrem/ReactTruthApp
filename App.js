import React from 'react'
import { Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import Data from './mock.json'
import Truth from './components/Truth'
import Header from './components/Header'

export default class App extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    truths: [],
  }

  componentWillMount () {
    this.loadTruths()
  }

  loadTruths = () => {
    this.setTruths([])
    setTimeout(() => {
      this.setTruths(Data.truths)
    }, 1000)
  }

  setTruths = (truths) => {
    this.setState({
      truths,
    })
    Animated.timing(
      this.state.opacity,
      {
        toValue: truths.length ? 1 : 0,
        duration: 500,
        easing: Easing.linear,
      },
    ).start()
  }

  handlePress = () => {
    const {index, total} = this.swiper.state
    this.loadTruths()
    if (index <= total) {
      this.loadTruths()
    }
  }

  render () {
    const {truths, opacity} = this.state

    return (
      <Animated.View style={{flex: opacity}}>
        <Header text={'Truth?'} style={{top: 0}}></Header>

        <Animated.View style={[styles.rootView, {opacity}]}>

          {truths.length ? (
            <Swiper ref={(swiper) => {this.swiper = swiper}}
                    loop={false}
                    showsPagination={false}>
              {truths.map(({text, color}) =>
                <Truth key={text} color={color} text={text}/>,
              )}
            </Swiper>
          ) : null}

          <TouchableOpacity onPress={this.handlePress}>
            <Header text={'Amen!'} style={{bottom: 0}}></Header>
          </TouchableOpacity>
        </Animated.View>

      </Animated.View>

    )
  }
}

const styles = StyleSheet.create({
  rootView: {
    backgroundColor: '#222',
    flex: 1,
  },
})
