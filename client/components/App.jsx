import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <AwesomeComponent />
      </div>);
  }
}
