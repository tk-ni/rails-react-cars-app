import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/app';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route exact path="/" render={() => <App />} />
    
      {/* Handle 404's */}
      <Route render={() => <App />} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
