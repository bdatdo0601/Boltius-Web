import React, { Component } from "react";
import PropTypes from "prop-types";

class BlankLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: <h1>Conasfasftent</h1>,
    };

    render() {
        return <div>{this.props.children}</div>;
    }
}

export default BlankLayout;
