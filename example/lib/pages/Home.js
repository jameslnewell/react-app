import React from 'react'
import Nav from '../layout/Nav';

export default class extends React.Component {

  componentWillMount() {
    console.log('Home', this.props, this.context);
  }

  render() {
    return <div>
      <Nav/>
      <h1>Home</h1>
      <p>Welcome to the homepage!</p>
    </div>
  }

}