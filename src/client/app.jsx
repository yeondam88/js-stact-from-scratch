import 'babel-polyfill';

import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import Dog from '../shared/dog';

const dogBark = new Dog('Browser Toby').bark();

const App = props => (
  <div>
    The dog says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDom.render(<App message={dogBark} />, document.querySelector('.app'));
