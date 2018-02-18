/**
 * PageHeader.JS
 *
 * This component render header of a specified page based on a given path.
 * It included breadcrumbs, title/description for the current URL and a few quick actions to make it quicker for user
 * to navigate
 *
 * Partially Integrated with React Router to look at the current path.
 * Renders when the user navigate or land at an URL.
 *
 *
 */
import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Breadcrumb, Row, Col } from "antd";
import DescriptionList from "ant-design-pro/lib/DescriptionList";

import "./index.less";

class PageHeader extends React.Component {
    static propTypes = {
        location: PropTypes.object,
        routeList: PropTypes.object,
    };

    static defaultProps = {
        location: {},
        routeList: {},
    };

    getRouteNameMap = url => {
        const { routeList } = this.props;
        if (!routeList[url]) {
            const parts = url.split("/");
            const name = parts.pop();
            return {
                NAME: name,
                TITLE: name,
                DESCRIPTION: "",
                EXTRA_DESCRIPTION: "",
            };
        }
        return routeList[url];
    };

    // this will generate extra breadcrumb other than the homepage based on the current URL
    getExtraBreadcrumbs = location => {
        const pathSnippets = location.pathname.split("/").filter(i => i);
        return pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{this.getRouteNameMap(url).NAME}</Link>
                </Breadcrumb.Item>
            );
        });
    };
    // generate breadcrumb (only appear when it is not Dashboard page)
    renderBreadcrumbs = location => {
        // append extra breadcrumbs (if any) to root breadcrumb (Homepage/Dashboard)
        const breadcrumbItems = [
            <Breadcrumb.Item key="home">
                <Link to="/">Home</Link>
            </Breadcrumb.Item>,
        ].concat(this.getExtraBreadcrumbs(location));
        if (breadcrumbItems.length > 1) {
            return <Breadcrumb className="breadcrumb">{breadcrumbItems}</Breadcrumb>;
        }
        return null;
    };
    // generate title for current URL
    renderTitle = location => <h1 className="title">{this.getRouteNameMap(location.pathname).TITLE}</h1>;
    // generate description for current URL
    renderDescription = location => <p>{this.getRouteNameMap(location.pathname).DESCRIPTION}</p>;
    renderRightImage = location => {
        if (this.getRouteNameMap(location.pathname).RIGHT_SIDE_IMAGE) {
            return <img src={this.getRouteNameMap(location.pathname).RIGHT_SIDE_IMAGE} alt="right-side-img" />;
        }
        return null;
    };
    renderExtraDescriptionList = location => (
        <DescriptionList col="2">
            {this.getRouteNameMap(location.pathname).EXTRA_DESCRIPTION.map(description => (
                <DescriptionList.Description key={description.value} term={description.title}>
                    <a href={description.value}>{description.value}</a>
                </DescriptionList.Description>
            ))}
        </DescriptionList>
    );

    render() {
        const { location } = this.props;
        return (
            <div className="page-header">
                <div className="page-header-main">
                    {this.renderBreadcrumbs(location)}
                    <Row style={{ paddingBottom: "16px" }}>
                        <Col span={18}>
                            {this.renderTitle(location)}
                            {this.renderDescription(location)}
                            {this.renderExtraDescriptionList(location)}
                        </Col>
                        <Col span={6} style={{ textAlign: "right" }}>
                            {this.renderRightImage(location)}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withRouter(PageHeader);
