// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './app.sass';

// Action creators and helpers

import Header from './shared/components/header/header';
import Routes from './pages';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header current={this.props.location.pathname} />

        <Routes />
      </div>
    );
  }
}

export default withRouter(connect()(App));
