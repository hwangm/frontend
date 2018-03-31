import React, { Component } from 'react';
import './App.css';
import Feature from '../Feature/Feature';

class App extends Component {
  render() {
    let featureList = window.FEATURES;

    let featureComponents = featureList.map((feature, index) => {
      return (
        <Feature key={index} title={feature.title} presence={feature.presence} subfeatures={feature.subfeatures} />
      )
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
        { featureComponents }
        </ul>
      </div>
    );
  }
}

export default App;
