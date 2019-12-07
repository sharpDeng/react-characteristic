import React, { Component } from 'react'
import Life from '../life-cycle'
import Type from '../other/index'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: ['vue', 'react', 'angular']
    }
  }

  onClick = () => {

  }

  render () {
    return (
      <div>
        <h3>jsx识别的数据结构</h3>
        {/* <Type /> */}
        <Life />
      </div>
    )
  }
}

export default Home
