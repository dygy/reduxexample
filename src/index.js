import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

// Add these imports - Step 1
import { Provider } from 'react-redux';
import { store } from './redux';

// Wrap existing app in Provider - Step 2
ReactDOM.render(
    <Provider store={store}>
        {//console.log(store.getState().geod)\
             }
        {console.log(this)}
        <App />
    </Provider>,
    document.getElementById('root')
);