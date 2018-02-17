import React, { Component } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

import SideBar from "../../component/SideBar";
import GlobalFooter from "../../component/GlobalFooter";
import GlobalHeader from "../../component/GlobalHeader";

import styles from "./styles";
import "./index.less";

const { Content } = Layout;

class MainLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: <h1>Content</h1>,
    };

    render() {
        return (
            <Layout style={styles.mainLayout}>
                <GlobalHeader />
                <Layout>
                    <SideBar />
                    <Content>{this.props.children}</Content>
                </Layout>
                <GlobalFooter />
            </Layout>
        );
    }
}

export default MainLayout;
