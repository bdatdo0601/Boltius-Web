import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "../../redux/store";

import App from "../../app";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
