import React from 'react'

export default class ContextComponent extends React.Component {

  getChildContext() {
    return {
      router:   this.props.router,
      location: this.props.location
    };
  }

  render() {
    return React.createElement(this.props.component);
  }

}

ContextComponent.childContextTypes = {
  router:       React.PropTypes.object.isRequired,
  location:     React.PropTypes.object
};

ContextComponent.propTypes = {
  component:    React.PropTypes.func.isRequired,
  context:      React.PropTypes.object.isRequired,
  router:       React.PropTypes.object.isRequired,
  location:     React.PropTypes.object
};

ContextComponent.defaultProps = {
  context:      {}
};