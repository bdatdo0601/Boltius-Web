import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Layout } from "antd";

import "./index.less";

const { Sider } = Layout;

export default class SideBar extends Component {
    static propTypes = {
        logoPath: PropTypes.any,
        logoTitle: PropTypes.string,
    };

    static defaultProps = {
        logoPath: "",
        logoTitle: "WIT SG",
    };

    render() {
        return (
            <Sider defaultCollapsed className="main-sider" collapsible>
                <div className="global-header-logo" key="logo">
                    <Link to="/">
                        <img src={this.props.logoPath} alt="logo" />
                        <h1>{this.props.logoTitle}</h1>
                    </Link>
                </div>
            </Sider>
        );
    }
}
