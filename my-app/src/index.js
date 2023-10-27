import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { store } from './redux/store/store' ;
import { Provider } from 'react-redux';
// import Checkout from './pages/Checkout/Checkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store = {store}>
  {/* <Checkout /> */}
    <App />

  </Provider>
 
  </React.StrictMode>
);


reportWebVitals();
