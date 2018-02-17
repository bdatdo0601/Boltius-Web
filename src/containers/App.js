import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import ErrorLayout from "../layout/ErrorLayout";
import { MAIN_ROUTES, ERROR_ROUTES } from "../routes";

import "./App.less";

const renderWithMainLayout = component => <MainLayout>{React.createElement(component)}</MainLayout>;

const renderWithErrorLayout = component => <ErrorLayout>{React.createElement(component)}</ErrorLayout>;

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {MAIN_ROUTES.map(ROUTE => (
                        <Route
                            key={ROUTE.PATH}
                            exact={ROUTE.EXACT}
                            path={ROUTE.PATH}
                            render={() => renderWithMainLayout(ROUTE.COMPONENT)}
                        />
                    ))}
                    {ERROR_ROUTES.map(ROUTE => (
                        <Route
                            key={ROUTE.PATH}
                            exact={ROUTE.EXACT}
                            path={ROUTE.PATH}
                            render={() => renderWithErrorLayout(ROUTE.COMPONENT)}
                        />
                    ))}
                </Switch>
            </Router>
        );
    }
}

export default App;
