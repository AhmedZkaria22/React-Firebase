import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// auth - firebase
import {AuthProvider} from './Context/Auth'

ReactDOM.render(
  <React.StrictMode>
    {/* auth - firebase */}
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

