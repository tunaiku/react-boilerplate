// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// Action creators and helpers

import Header from './shared/components/header';
import Routes from './pages';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header current={this.props.location.pathname} />
        <div id="content">
          <Routes />
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(App));
