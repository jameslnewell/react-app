import React from 'react'
import Nav from '../layout/Nav';

export default class extends React.Component {

  componentWillMount() {
    console.log('About', this.props);
  }

  render() {
    return <div>
      <Nav/>
      <h1>About</h1>
      <p>This site is a demonstration of an isomorphic react app</p>
    </div>
  }

}