import React, { Component } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import "ant-design-pro/dist/ant-design-pro.css";

import SideBar from "../../component/SideBar";
import PageHeader from "../../component/PageHeader";
import GlobalFooter from "../../component/GlobalFooter";

import { SIDE_BAR_ITEMS, MAIN_ROUTES } from "../../routes";

import logo from "../../assets/logo.png";
import styles from "./styles";
import "./index.less";
import RouteAdapter from "../../utils/adapter/routeAdapter";

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
                    <PageHeader routeList={RouteAdapter.toRouteList(MAIN_ROUTES)} />
                    <Content className="basic-content">{this.props.children}</Content>
                    <GlobalFooter />
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;
