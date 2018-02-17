import React, { Component } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

import SideBar from "../../component/SideBar";
import GlobalFooter from "../../component/GlobalFooter";
import GlobalHeader from "../../component/GlobalHeader";

import { SIDE_BAR_ITEMS } from "../../routes";

import logo from "../../assets/logo.png";
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
                <SideBar sideBarItems={SIDE_BAR_ITEMS} logoPath={logo} logoTitle="Boltius Tool" />
                <Layout>
                    <GlobalHeader />
                    <Content className="basic-content">{this.props.children}</Content>
                    <GlobalFooter />
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
