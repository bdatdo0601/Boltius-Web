import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { MAIN_ROUTES, ERROR_ROUTES } from "../routes";
import { GlobalActions } from "../redux/actions/GlobalActions";
import "./index.css";

class App extends Component {
    static propTypes = {
        checkMobileSize: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.addEventListener("resize", () => {
            this.props.checkMobileSize();
        });
    }

    render() {
        return (
            <Router>
                <Switch>
                    {MAIN_ROUTES.map(ROUTE => (
                        <Route key={ROUTE.PATH} exact={ROUTE.EXACT} path={ROUTE.PATH} component={ROUTE.COMPONENT} />
                    ))}
                    {ERROR_ROUTES.map(ROUTE => (
                        <Route key={ROUTE.PATH} exact={ROUTE.EXACT} path={ROUTE.PATH} component={ROUTE.COMPONENT} />
                    ))}
                </Switch>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.GlobalReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...GlobalActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
