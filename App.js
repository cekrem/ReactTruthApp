import React from 'react'
import { Animated } from 'react-native'
import Swiper from 'react-native-swiper'
import Truth from './components/Truth'
import Data from './mock.json'

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
      <Animated.View style={{flex: 1, opacity}}>
        <Swiper showsPagination={false}>
          {truths.map(({text, color, id}) =>
            <Truth key={color} color={color} text={text}/>,
          )}
        </Swiper>
      </Animated.View>
    )
  }
}

