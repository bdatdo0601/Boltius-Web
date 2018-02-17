import React, { Component } from "react";
import { Layout } from "antd";

import "./index.less";

const { Header, Sider, Content, Footer } = Layout;

class MainLayout extends Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider collapsible width={200}>
                        Sider
                    </Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default MainLayout;
