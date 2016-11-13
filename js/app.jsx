/**
 * CSS sheets
 */
require('todomvc-common/base.css');
require('todomvc-app-css/index.css');
require('../css/app.css');

// require('todomvc-common/base.js');

/**
 * App functionality
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));