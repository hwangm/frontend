import React from 'react';
import ReactDOM from 'react-dom';
import Feature from './Feature';

it('renders without crashing', () => {
  let subfeatures = [];
  let presence = false;
  const div = document.createElement('div');
  ReactDOM.render(<Feature title="Test" presence={presence} subfeatures={subfeatures}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
  