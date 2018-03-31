import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let features = window.FEATURES;
    console.log(typeof features);
    console.log(features);
    let results = features.map((e) => {
      return (
        <div>
          <p>
            { e['title'] }
          </p>
        </div>
      )
    });
    return (
      <div>
        { results }
      </div>
    )
  }
}

export default Feature;
