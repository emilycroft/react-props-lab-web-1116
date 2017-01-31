import React from 'react'


class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}


// const colors =

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false
}


module.exports = Spaceship
