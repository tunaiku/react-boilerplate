import React, { PureComponent } from 'react';

class Main extends PureComponent {
  render() {
    return <main className="main-content">{this.props.children}</main>;
  }
}

export default Main;
