import React, { Component } from "react";
import { Layout } from "antd";

import "./index.less";

const { Header } = Layout;

export default class GlobalHeader extends Component {
    render() {
        return <Header className="global-header" />;
    }
}
