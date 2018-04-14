import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import store from "./redux/store";
import App from "./app";

import "./index.less";

const rootDOM = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    rootDOM
);
registerServiceWorker();
