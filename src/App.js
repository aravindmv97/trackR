import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './Redux/Store/Store.js';
import MainPage from './Containers/MainPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

export default App;