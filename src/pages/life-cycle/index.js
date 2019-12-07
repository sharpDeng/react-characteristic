/**
 * React 数据操作
 *
 *
 * React 生命周期
 *
 * 1. 创建期
 * 1-1. initial render       初始化
 * 1-2. cosntructor          构造函数
 * 1-3. componentWillMount   组件将挂载
 * 1-4. render               渲染
 * 1-5. componentDidMount    组件挂载完毕（已经被渲染）
 *
 * 2. 存在期
 * 2-1. 父组件 rander
 * 2-2. componentReceiveProps
 * 2-3. shouldComponentUpdate
 * 2-4. componentWillUpdate
 * 2-5. render
 * 2-6. componentDillUpdate
 *
 * 3. 销毁期
 * 3-1. render
 * 3-2.  componentWillUnm ount
 *
 * 一般是清除绑定，清除一些状态，清理表单绑定的一些数据
 * 简单说就是清理状态
 *
 */

import React, { Component } from 'react'

class Parent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '组件',
      value: ''
    }
    console.log('Parent 构造函数')
  }

  render () {
    console.log('Parent render')
    return (
      <div>
         这是{this.state.name}
        <input onChange={(e) => {
          console.log('----------------------')
          this.setState({ value: e.target.value })
        }}
        />
        <button onClick={() => {
          console.log('-----------------------')
          this.setState({ name: this.state.value })
        }}
        >改变值
        </button>
        <Son name={this.state.name} />
      </div>
    )
  }

  // UNSAFE_componentWillMount () {
  //   console.log('Parant will mount')
  // }

  componentDidMount () {
    console.log('Parent did Mount')
  }

  shouldComponentUpdate () {
    console.log('Parent shouldUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('Parent did update')
  }

  componentWillUnmount () {
    console.log('Parent will unmount')
  }
}

class Son extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '子组件'
    }
    console.log('Son 构造函数')
  }

  clickBtn = (e) => {
    this.setState({ value: e.target.value })
  }

  render () {
    console.log('Son render')
    const { name } = this.props
    return (
      <div>
       这是{name}-son
        <GrandSon name={name} />
      </div>
    )
  }

  componentWillMount () {
    console.log('Son will mount')
  }

  componentDidMount () {
    console.log('Son did Mount')
  }

  shouldComponentUpdate () {
    console.log('Son shouldUpdate')
    return false
  }

  componentDidUpdate () {
    console.log('Son did update')
  }

  componentWillUnmount () {
    console.log('Son will unmount')
  }
}

class GrandSon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '孙组件'
    }
    console.log('GrandSon 构造函数')
  }

  render () {
    console.log('GrandSon render')
    const { name } = this.props
    return (
      <div>这是{name}-grand</div>
    )
  }

  componentDidMount () {
    console.log('GrandSon did Mount')
  }

  shouldComponentUpdate () {
    console.log('GrandSon shouldUpdate')
    return true
  }

  componentDidUpdate () {
    console.log('GrandSon did update')
  }

  componentWillUnmount () {
    console.log('GrandSon will unmount')
  }
}

export default Parent
