import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import "./index.less";

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

const renderMenuItem = ITEM => {
    if (ITEM.SUBMENU.length !== 0) {
        return (
            <SubMenu
                key={ITEM.LINK}
                title={
                    <span>
                        <Icon type={ITEM.ICON} />
                        <span>{ITEM.TITLE}</span>
                    </span>
                }
                onClick={ITEM.ONCLICK}
            >
                {ITEM.SUBMENU.map(item => renderMenuItem(item))}
            </SubMenu>
        );
    }
    return (
        <Item key={ITEM.LINK}>
            <Link to={ITEM.LINK} onClick={ITEM.ONCLICK}>
                <Icon className="main-sider-icon" type={ITEM.ICON} />
                <span>{ITEM.TITLE}</span>
            </Link>
        </Item>
    );
};

export default class SideBar extends Component {
    static propTypes = {
        logoPath: PropTypes.any,
        logoTitle: PropTypes.string,
        sideBarItems: PropTypes.array,
    };

    static defaultProps = {
        logoPath: "",
        logoTitle: "WIT SG",
        sideBarItems: [],
    };

    renderMenu = () => {
        const currentKeys = window.location.pathname;
        return (
            <Menu className="main-sider-menu" key="Menu" theme="dark" mode="inline" selectedKeys={[currentKeys]}>
                {this.props.sideBarItems.map(ITEM => renderMenuItem(ITEM))}
            </Menu>
        );
    };

    render() {
        return (
            <Sider defaultCollapsed className="main-sider" collapsible>
                <div className="main-sider-logo" key="logo">
                    <Link to="/">
                        <img src={this.props.logoPath} alt="logo" />
                        <h1>{this.props.logoTitle}</h1>
                    </Link>
                </div>
                {this.renderMenu()}
            </Sider>
        );
    }
}
