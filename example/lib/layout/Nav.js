import React from 'react'
import RouteLink from '../../../lib/router/components/Link'

export default class extends React.Component {

  render() {
    return <nav>
      <RouteLink name="home">Home</RouteLink>
      <RouteLink name="about">About</RouteLink>
      <script src="client.build.js"></script>
    </nav>
  }

}