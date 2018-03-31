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
    if(this.props.subfeatures.length > 0){
      let subfeatures = this.props.subfeatures;
      console.log(this.props.subfeatures);
      let subfeatureComponents = subfeatures.map((feature, index) => {
        return (
          <Feature key={index} title={feature.title} presence={feature.presence} subfeatures={feature.subfeatures} />
        )
      });
      return (
        <li>
          {this.props.title} - {this.props.presence ? 'Present' : 'Not Present'}
          <ul>
            {subfeatureComponents}
          </ul>
        </li>
      )
    }
    else{
      return (
        <li>
          {this.props.title} - {this.props.presence ? 'Present' : 'Not Present'}
        </li>
      )
    }
    
  }
}

export default Feature;
