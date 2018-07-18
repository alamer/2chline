import React from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from "../src/store/index";
import { render } from "react-dom";


render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
registerServiceWorker();
