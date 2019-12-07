// 组件通讯， todo 例子
import React, { Component } from 'react'

class Action extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <div>
        <input value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
        <button onClick={() => this.props.onAdd(this.state.value)}>添加</button>
      </div>
    )
  }
}

class List extends Component {
  render () {
    return (
      <div>
        {this.props.data.map(item => <p key={item.id}>{item.name}</p>)}
      </div>
    )
  }
}

class ToDo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [{ name: 'a', id: 0 }]
    }
  }

  render () {
    return (
      <div>
        <Action
          onAdd={(name) => {
            const { list } = this.state
            list.push({
              name,
              id: name
            })

            this.setState({
              list
            })
          }}
        />
        <List data={this.state.list} />
      </div>
    )
  }
}

export default ToDo
