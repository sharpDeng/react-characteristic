import React from 'react'
// import logo from './logo.svg';
// import Home from './pages/home'
import ToDo from './pages/other/tongxun'
import './App.css'

function App () {
  return (
    <div className='App'>
      <ToDo />
    </div>
  )
}

// class Child extends Component{
//   render() {
//           return (
//                    <div>
//                             {this.props.name}
//                    </div>
//           );
//   }
//   componentDidMount() {
//           console.log('mount',this.props.name)
//   }
//   componentDidUpdate() {
//           console.log('update',this.props.name)
//   }
//   componentWillUnmount() {
//           console.log('unmount',this.props.name)
//   }

// }
// // class App extends Component{
// //   state = {
// //           list: ['a','b','c']
// //   }
// //   render() {
// //           return (
// //                    <div>
// //                             {/* {this.state.list.map(item => <Child name={item}/>)}\ */}
// //                             <Child name={this.state.list}/>
// //                             <button onClick={e => {
// //                                      this.setState({
// //                                              list: ['b','b','c']
// //                                      })
// //                                      this.setState({
// //                                        list: [
// //                                          'c','b','c'
// //                                        ]
// //                                      })
// //                             }}>set</button>
// //                    </div>
// //           );
// //   }
// // }
// class App extends Component{
//   state = {
//       num: 1
//   }
//   render() {
//       return (
//           <div>
//               sss
//           </div>
//       );
//   }
//   componentDidUpdate(prevProps, prevState) {
//       console.log(this.state.num)
//   }
//   componentDidMount() {
//       setTimeout(() => {
//           console.log('timeout')
//       })
//       new Promise((resovle) => {
//           console.log('before')
//           resovle('then')
//           console.log('after')
//       }).then(res => {
//           console.log(res)
//       })
//       let {num} = this.state
//       this.setState({
//           num: ++num
//       }, () => {
//           console.log('after setState')
//       })
//       console.log('---')
//   }
// }

export default App
