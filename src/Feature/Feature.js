import React, { Component } from 'react';
import './Feature.css';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubfeatures: false
    };
  }

  onClick() {
    this.setState((prevState) => ({
      showSubfeatures: !prevState.showSubfeatures
    }));

  }
  
  render() {
    let featurePresentIcon = <i className="icon-right green fa fa-check"></i> ;
    let featureNotPresentIcon = <i className="icon-right red fa fa-times"></i>;

    if(this.props.subfeatures.length > 0){
      let subfeatures = this.props.subfeatures;

      let subfeatureComponents = subfeatures.map((feature, index) => {
        return (
          <Feature key={index} title={feature.title} presence={feature.presence} subfeatures={feature.subfeatures} />
        )
      });

      
      
      return (
        <li className="Feature">
          <div className="has-subfeatures" onClick={() => this.onClick()}>
            <span>{this.props.title}</span>
            <span className="show-subfeatures-text">Show/hide subfeatures</span>
            {this.props.presence ? featurePresentIcon : featureNotPresentIcon }
          </div>
          { this.state.showSubfeatures ? <ul>{ subfeatureComponents }</ul> : null }
        </li>
      )
    }
    else{
      return (
        <li className="Feature">
          <div className="no-subfeatures"><span>{this.props.title}</span> {this.props.presence ? featurePresentIcon : featureNotPresentIcon }</div>
        </li>
      )
    }
    
  }
}

export default Feature;
