import React, { Component } from 'react';
import './FeaturesList.css';
import Feature from '../Feature/Feature';

class FeaturesList extends Component {
  render() {
    let featureList = window.FEATURES;
    if(!featureList){
      return (
        <div>
          <div className="Feature-header">
            <h2>Camp Features</h2>
          </div>
          <div className="Feature-container">
            Something went wrong. We're not able to display features of this campsite at the moment. Sorry about that!
          </div>
        </div>
      );
    }
    let featureComponents = featureList.map((feature, index) => {
      return (
        <Feature key={index} title={feature.title} presence={feature.presence} subfeatures={feature.subfeatures} />
      )
    });

    return (
      <div>
        <div className="Feature-header">
          <h2>Camp Features</h2>
        </div>
        <div className="Feature-container">
          <ul className="Feature-top">
          { featureComponents }
          </ul>
        </div>
      </div>
    );
  }
}

export default FeaturesList;
