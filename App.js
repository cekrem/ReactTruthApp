import React from 'react'
import Truth from './components/Truth'
import Swiper from 'react-native-swiper'

export default class App extends React.Component {
  state = {
    truths: [
      {
        id: 1,
        text: 'lorem ipsum',
        color: 'yellow',
      },
      {
        id: 2,
        text: 'lorem Hipsum',
        color: 'blue',
      },
    ],
  }

  shuffleTruths = () => this.setState(state => (
    {
      ...state,
      truths: state.truths.map(el => [el, Math.random()]).
        sort((a, b) => a[1] - b[1]).
        map(arrWithRand => arrWithRand[0]),
    }
  ))

  render () {
    return (
      <Swiper>
        {this.state.truths.map(({text, color, id}) =>
          <Truth key={id} color={color} text={text}></Truth>,
        )}
      </Swiper>
    )
  }
}

