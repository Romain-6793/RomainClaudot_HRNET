import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import reportWebVitals from "./reportWebVitals";
import App from './App'
import { loadData } from './slices/userSlice';


const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(loadData(null))

// "null" because it doesn't expect anything as a parameter.

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}> 
        <App></App>
      </Provider>
    </Router>
  </React.StrictMode>,
)

reportWebVitals()