import React, { Component } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

import GlobalFooter from "../../component/GlobalFooter";

import styles from "./styles";
import "./index.less";

const { Content } = Layout;

class ErrorLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: <h1>Content</h1>,
    };

    render() {
        return (
            <Layout style={styles.blankLayout}>
                <Layout>
                    <Content>{this.props.children}</Content>
                </Layout>
                <GlobalFooter />
            </Layout>
        );
    }
}

export default ErrorLayout;
