import React from 'react';
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import store from './store'

import routes from './routes'

import RouteContainer from './components/RouteContainer'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouteContainer routes={routes} />
      </Router>
    </Provider>
  );
}

export default App;
