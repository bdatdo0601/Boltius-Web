import React, { Component } from "react";
import { Layout } from "antd";
import "./App.less";

const { Header, Sider, Content, Footer } = Layout;

class App extends Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider collapsible>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}

export default App;
