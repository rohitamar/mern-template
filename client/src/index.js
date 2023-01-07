//react imports
import React from 'react';
import { createRoot } from 'react-dom/client';

//redux imports
import { Provider } from 'react-redux'
import { configureStore }  from '@reduxjs/toolkit'
import rootReducer from './reducers';

//components/css imports
import './index.css';
import App from './App';

//initialize redux store
const store = configureStore({
    reducer: rootReducer
});

const container = document.getElementById('root');
const root = createRoot(container);

//render
root.render(
  <Provider store = {store}>
      <App />
  </Provider>
);
