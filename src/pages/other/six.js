import React, { Component } from 'react'

// 第六测试题
class InputNumber extends Component {
  constructor (props) {
    super(props)
    const { value, defaultValue } = this.props

    if (value) {
      this.state = { value }
    } else if (defaultValue) {
      // this.refs.InputNumber.value = defaultValue
    }
  }

  render () {
    const { value, onChange, defaultValue } = this.props
    return (
      <div>
        {
          defaultValue
            ? <input ref='inputNumber' defaultValue={defaultValue} />
            : <input
              value={this.state.value}
              onChange={(e) => {
                if (value) {
                  this.setState({ value: e.target.value })
                }
                onChange(e)
              }}
            />
        }
      </div>)
  }

  componentDidMount () {
    const { onChange, defaultValue } = this.props

    if (defaultValue) {
      this.refs.inputNumber.onChange = (e) => {
        onChange(e)
      }
    }
  }
}

class Six extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'aaa'
    }
  }

  render () {
    const { value } = this.state
    return (
      <div>
        <InputNumber value={value} onChange={e => {}} />
        <InputNumber defaultValue={value} onChange={e => {}} />
      </div>
    )
  }
}

export default Six
