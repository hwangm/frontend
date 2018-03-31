import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  constructor(props) {
    super(props);
    // props:
    // title
    // presence
    // subfeatures
    this.state = {
      showSubfeatures: false
    };
  }

  onClick() {
    if(this.state.showSubfeatures){

    }
    this.setState({
      showSubfeatures: !this.state.showSubfeatures
    });

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
        <li class="Feature">
          <button type="button">{this.props.title} - {this.props.presence ? 'Present' : 'Not Present'}</button>
          <ul>
            { this.state.showSubfeatures ? subfeatureComponents : null}
          </ul>
        </li>
      )
    }
    else{
      return (
        <li class="Feature">
          <button type="button">
            {this.props.title} - {this.props.presence ? 'Present' : 'Not Present'}
          </button>
        </li>
      )
    }
    
  }
}

export default Feature;
