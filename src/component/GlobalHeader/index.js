import React, { Component } from "react";
import { Layout } from "antd";

const { Header } = Layout;

export default class GlobalHeader extends Component {
    render() {
        return (
            <Header>
                <div className="global-header-logo" />
            </Header>
        );
    }
}
