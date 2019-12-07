import React, { Component } from 'react'

// 列表渲染 key 优化
// 生命周期 已经该表
// key和实际的props值不管有没有改变，都会触发componentDidUpdate生命函数；

class KeyItem extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { name } = this.props
    return (
      <div>
        {name}
      </div>
    )
  }

  componentDidMount () {
    const { name } = this.props
    console.log(name, 'DidMount')
  }

  componentWillUnmount () {
    const { name } = this.props
    console.log(name, 'WillUnmount')
  }
}
class KeyList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arr: ['vue', 'react', 'angular'],
      Arr: ['1', '2', '3']
    }
  }

  render () {
    return (
      <div>
        {
          this.state.arr.map((item) => {
            return <KeyItem key={item} name={item} />
          })
        }
        {/* {
          this.state.Arr.map((item) => {
            return <KeyItem name={item} key={item} />
          })
        } */}
        <button onClick={() => {
          this.setState({
            arr: ['react', 'angular'],
            Arr: ['2', '3']
          })
        }}
        >改变数据
        </button>
      </div>
    )
  }
}

class Ohter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arr: [1, 2, 3, 4],
      str: 'holle world',
      num: 1234
      // obj: { name: 1 }
    }
  }

  render () {
    const Arr = []; let key
    for (key in this.state) {
      Arr.push(this.state[key])
    }
    return (
      <div>
        {/* {
          Arr.map(item => {
            return (<div key={item}>{item}</div>)
          })
        } */}
        <KeyList />
      </div>
    )
  }
}

export default Ohter
