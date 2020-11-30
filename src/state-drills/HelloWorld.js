import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = { who: "world"}
  }
  handleWorldButton = () => {
    console.log('world clicked')
    this.setState({
      who: "world"
    })
  }
  handleFriendButton = () => {
    console.log('friend clicked')
    this.setState({
      who: "friend"
    })
  }
  handleReactButton = () => {
    console.log('react clicked')
    this.setState({
      who: "react"
    })
  }
  render(){
    return (
      <div>
        <p>Hello, {this.state.who}!</p>
        <button onClick={this.handleWorldButton}>World</button>
        <button onClick={this.handleFriendButton}>Friend</button>
        <button onClick={this.handleReactButton}>React</button>
      </div>
    )
  }
}

export default HelloWorld;