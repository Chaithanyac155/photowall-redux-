import React from 'react';

import Main from './PhotoWall/Main';
import {BrowserRouter} from 'react-router-dom'
import { createStore } from 'redux';
import rootReducer from './redux/reducer';
import { Provider } from 'react-redux';


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
    <div className="App">
  

     <Provider store={store}><BrowserRouter><Main /></BrowserRouter></Provider>

    </div>
  );
}

export default App;
