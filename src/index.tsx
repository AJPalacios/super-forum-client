import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import configureStore from "./store/configureStore";
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./components/ErrorBoundary"

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <ErrorBoundary>{[<App key="App" />]}</ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
