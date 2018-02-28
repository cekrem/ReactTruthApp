import React from 'react'
import { Animated, TouchableOpacity, View } from 'react-native'
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

  render () {
    const {truths, opacity} = this.state

    return (
      <View style={{flex: 1}}>
        <Header text={'Truth?'} style={{top: 0}}></Header>
        <Animated.View style={{flex: 1, opacity}}>
          <Swiper showsPagination={false}>
            {truths.map(({text, color}) =>
              <Truth key={text} color={color} text={text}/>,
            )}
          </Swiper>
        </Animated.View>
        <TouchableOpacity>
          <Header text={'Amen!'} style={{bottom: 0}}></Header>
        </TouchableOpacity>
      </View>
    )
  }
}

