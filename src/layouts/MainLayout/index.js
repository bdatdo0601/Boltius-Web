import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import logo from "../../assets/images/logo.png";

import { SIDE_BAR_ITEMS } from "../../routes";
import { GlobalActions } from "../../redux/actions/GlobalActions";

import "./index.less";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const getMenuItem = item => {
    if (item.SUBITEMS.length === 0) {
        return (
            <Menu.Item key={item.TITLE}>
                <Icon type={item.ICON} />
                <span>{item.TITLE}</span>
            </Menu.Item>
        );
    }
    return (
        <SubMenu
            key={item.TITLE}
            title={
                <span>
                    <Icon type={item.ICON} />
                    <span>{item.TITLE}</span>
                </span>
            }
        >
            {item.SUBITEMS.map(subitem => <Menu.Item key={subitem.KEY}>{subitem.TITLE}</Menu.Item>)}
        </SubMenu>
    );
};

class MainLayout extends Component {
    static propTypes = {
        children: PropTypes.node,
        history: PropTypes.object.isRequired,
        isMobile: PropTypes.bool.isRequired,
        title: PropTypes.string,
        shortenedTitle: PropTypes.string,
        logo: PropTypes.string,
    };

    static defaultProps = {
        children: <h1>Content</h1>,
        title: "Wentworth Student Government",
        shortenedTitle: "WITSG",
        logo,
    };

    constructor(props) {
        super(props);
        this.state = {
            collapsed: props.isMobile,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isMobile && !prevState.collapsed) {
            return { collapsed: nextProps.isMobile };
        }
        return null;
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onMenuItemSelect = ({ key }) => {
        const selectedKey = SIDE_BAR_ITEMS.find(
            item => item.TITLE === key || item.SUBITEMS.find(subitem => subitem.KEY === key)
        );
        if (selectedKey.PATH) {
            this.props.history.push(selectedKey.PATH);
        } else {
            this.props.history.push(selectedKey.SUBITEMS.find(subitem => subitem.KEY === key).PATH);
        }
    };

    renderLogo = () => (
        <div className="logo" key="logo">
            <Link to="/">
                <img src={this.props.logo} alt="logo" />
                <h1>{this.props.shortenedTitle}</h1>
            </Link>
        </div>
    );

    renderSideMenu = () => (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            {this.renderLogo()}
            <Menu
                theme="dark"
                defaultSelectedKeys={[SIDE_BAR_ITEMS[0].TITLE]}
                mode="inline"
                onSelect={this.onMenuItemSelect}
            >
                {SIDE_BAR_ITEMS.map(ITEM => getMenuItem(ITEM))}
            </Menu>
        </Sider>
    );

    renderBreadCrumbs = () => {
        const { pathname } = this.props.history.location;
        const breadcrumbs = pathname.split("/");
        breadcrumbs.shift();
        if (breadcrumbs[0] === "") return null;
        return (
            <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                {breadcrumbs.map(breadcrumb => <Breadcrumb.Item>{breadcrumb}</Breadcrumb.Item>)}
            </Breadcrumb>
        );
    };

    renderHeader = () => (
        <Header style={{ background: "#fff", paddingLeft: 16 }}>
            {this.state.collapsed && (
                <center>
                    <h1 className="headerTitle">
                        {this.props.isMobile ? this.props.shortenedTitle : this.props.title}
                    </h1>
                </center>
            )}
        </Header>
    );

    render() {
        return (
            <Layout style={{ minHeight: "100vh" }}>
                {this.renderSideMenu()}
                <Layout>
                    {this.renderHeader()}
                    <Content style={{ margin: "0 16px" }}>
                        {this.renderBreadCrumbs()}
                        <div style={{ paddingTop: 8 }}>{this.props.children}</div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>WIT@CSS and WITSG ©2016 Created by Dat Do</Footer>
                </Layout>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.GlobalReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...GlobalActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
