import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AuthProvider } from './components/AuthContext'; // Import the provider

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
