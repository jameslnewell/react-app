import React from 'react'
import extend from 'extend'

import Router from '../router';
import Context from './Context';

/**
 * A router component
 */
export default class RouterComponent extends React.Component {

  /**
   * Construct the router
   * @constructor
   * @param   {Object} props
   * @param   {Object} context
   */
  constructor(props, context) {
    super(props, context);

    var self = this;
    this.state = {};

    //initialise the router
    if (this.props.router) {
      this.router = this.props.router;
    } else {
      this.router = new Router();
    }

    //initialise the location
    if (this.props.location) {
      this.location = this.props.location;
    }

    //create routes from children
    React.Children.forEach(this.props.children, function(child) {
      if (React.isValidElement(child)) {
        self.router.map(child.props.name, child.props.pattern, child.props.component);
      }
    });

    this.handleLocationChange = this.handleLocationChange.bind(this);

    //perform the inital route
    this.handleLocationChange(this.props.url);
  }

  componentWillMount() {

    //start listening for location changes
    if (this.location) {
      this.location
        .register()
        .on('changed', this.handleLocationChange)
      ;
    }

  }

  componentWillUnmount() {

    //stop listening for location changes
    if (this.location) {
      this.location
        .off('changed', this.handleLocationChange)
        .unregister()
      ;
    }

  }

  handleLocationChange(url) {
    this.setState({
      route: this.router.route(url, this.props.context)
    });
  }

  render() {
    var route = this.state.route;
console.log(route);
    //TODO: error handling?
    if (!route) {
      return <div>
        <h1>Page not found!</h1>
        <p>No route was matched.</p>
      </div>;
    }

    return route.component;
  }

}

RouterComponent.propTypes = {
  url:      React.PropTypes.string.isRequired,  //TODO: need to prefix with initial?
  router:   React.PropTypes.object,
  location: React.PropTypes.object,
  context:  React.PropTypes.object
};

RouterComponent.defaultProps = {
  url:      '/'                                 //TODO: need to prefix with initial?
};

//TODO: render layers of views like react-router
//TODO: wait for async tasks on server side before rendering
//TODO: clean up creation of routes