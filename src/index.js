import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab, fas);

ReactDOM.render(<App />, document.getElementById('root'));
