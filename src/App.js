import React, { Component } from 'react';
import DashBoard from './components/dashboard/dashboard';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <DashBoard/>
        </div>
      </Provider>
    );
  }
}

export default App;
