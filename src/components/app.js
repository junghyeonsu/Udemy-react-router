import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        this is App Component!!
        {this.props.children}
      </div>
    );
  }
}
