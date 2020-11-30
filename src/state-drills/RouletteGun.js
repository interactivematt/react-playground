import React from 'react'

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  state = {
    chamber: null,
    spinningTheChamber: false
  };
  handleTrigger = () => {
    console.log('trigger pulled')
    this.setState({
      spinningTheChamber: true
    })

    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }
  renderText(){
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if ( chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return `you're safe!`
    }
  }
  render(){
    console.log(this.state)
    console.log(this.renderText())
    return(
      <div className='RouletteGun'>
        <p>{this.renderText()}</p>
        <button onClick={this.handleTrigger}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;