import React from 'react';
import ReactDOM from 'react-dom/client';

//## Import Route ##//
import App from './App';

//## Import SCSS ##//
import './styles/index.scss';

import reportWebVitals from './reportWebVitals';

//#################//

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
