import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import {OwnerProvider} from "./features/login_signup/OwnerContext"
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(ownerReducer, applyMiddleware(thunk))
root.render(
  <Provider store = {store}>
    <OwnerProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </OwnerProvider>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//test
reportWebVitals();
