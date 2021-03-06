import React from 'react';
import Header from './common/header';
import { RouteHandler } from 'react-router';

class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
