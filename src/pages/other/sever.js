import React, { Component } from 'react'
import ReactDOM from 'react-dom'

var ConfirmDialog = function ConfirmDialog (props) {
  const { width, height, onCancel, onConfirm } = props
  const confirmStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '10000',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '15px'
  }

  const contextStyle = {
    width: width || '416px',
    height: height || '100px'
  }

  const btnStyle = {
    width: '70px',
    height: '30px',
    borderRadius: '5px',
    float: 'right',
    marginRight: '10px'
  }
  return (
    <div style={{ position: 'fixed', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.2)', top: 0, left: 0 }}>
      <div style={confirmStyle}>
        <div style={contextStyle}>
          {props.content}
        </div>
        <div style={{ position: 'absolute', bottom: '0', widht: '100%' }}>
          <button onClick={() => { onCancel() }} style={btnStyle}>取消</button>
          <button onClick={() => { onConfirm() }} style={btnStyle}>确认</button>
        </div>
      </div>
    </div>
  )
}
function confirm (param) {
  var div = document.createElement('div')
  document.body.appendChild(div)

  let props = {
    onCancel: () => {
      close()
    },
    onConfirm: () => {
      close()
    }
  }

  if (typeof param === 'string') {
    props.content = param
  } else if (typeof param === 'object' && !(param instanceof Array)) {
    props = Object.assign({}, props, param)
  }

  function close () {
    // div.style.display = 'none'
    document.body.removeChild(div)
    console.log('none')
  }

  return new Promise((resolve, reject) => {
    ReactDOM.render(React.createElement(ConfirmDialog, props), div, function (e) {
      resolve(true)
    })
  })
}

class Seven extends Component {
  render () {
    return (
      <div>
        <button onClick={async () => { await confirm('确定删除吗') }}>弹窗</button>
      </div>
    )
  }

  async componentDidMount () {
    const res = await confirm('确定删除吗')
    if (res) {
      console.log('是')
    } else {
      console.log('否')
    }
  }
}

export default Seven
