import React, { Component } from 'react'
import Icon from '../Icon'

// 支持受控或非受控
class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Icon />
      </div>
    )
  }
}

export default Input
