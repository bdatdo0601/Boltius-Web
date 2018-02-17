import React, { Component } from "react";
import { Layout } from "antd";

const { Sider } = Layout;

export default class SideBar extends Component {
    render() {
        return (
            <Sider defaultCollapsed className="main-sider" collapsible>
                Sider
            </Sider>
        );
    }
}
