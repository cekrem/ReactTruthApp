import React from 'react'
import { Animated, TouchableOpacity } from 'react-native'
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
        toValue: 1,
        duration: 200,
      },
    ).start()
  }

  handlePress = () => {
    this.swiper.scrollBy(1)
  }

  render () {
    const {truths, opacity} = this.state

    return (

      <Animated.View style={{flex: 1, opacity}}>
        <Header text={'Truth?'} style={{top: 0}}></Header>

        {truths.length ? (
          <Swiper ref={(swiper) => {this.swiper = swiper;}} showsPagination={false}>
            {truths.map(({text, color}) =>
              <Truth key={text} color={color} text={text}/>,
            )}
          </Swiper>
        ) : null}

        <TouchableOpacity onPress={this.handlePress}>
          <Header text={'Amen!'} style={{bottom: 0}}></Header>
        </TouchableOpacity>
      </Animated.View>

    )
  }
}

