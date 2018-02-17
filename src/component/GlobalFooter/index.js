import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default class GlobalFooter extends Component {
    render() {
        return <Footer style={{ textAlign: "center" }}>WIT SG &amp; WCSS ©2018 Created by Dat Do</Footer>;
    }
}
