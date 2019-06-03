import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
