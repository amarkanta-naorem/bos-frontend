import React from 'react';
import Header from './components/Dashboard/Header';
import Body from './components/Dashboard/Body';
import { Provider } from 'react-redux';
import Store from './utils/redux/Store';

const App = () => {
  return (
    <div>
      <Provider store={Store}>
      <Header />
      <Body />
    </Provider>
    </div>
  );
}

export default App;
