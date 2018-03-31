import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  constructor(props) {
    super(props);
    // props:
    // title
    // presence
    // subfeatures
  }
  render() {
    if(this.props.subfeatures){
      let subfeatures = this.props.subfeatures;

      let subfeatureComponents = subfeatures.map((feature, index) => {
        return (
          <div>
            <Feature key={index} title={feature.title} presence={feature.presence} subfeatures={feature.subfeatures} />
          </div>
        )
      });
      return (
        <div>
          <li>
            {this.props.title} - {this.props.presence ? 'Present' : 'Not Present'}
            <ul>
              {subfeatureComponents}
            </ul>
          </li>
        </div>
      )
    }
    else{
      return (
        <div>
          <li>
            {this.props.title} - {this.props.presence ? 'Present' : 'Not Present'}
          </li>
        </div>
      )
    }
    
  }
}

export default Feature;
