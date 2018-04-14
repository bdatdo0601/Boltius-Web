import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { GlobalActions } from "../redux/actions/GlobalActions";
import logo from "../assets/images/logo.svg";
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
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
