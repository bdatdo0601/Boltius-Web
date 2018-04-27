import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, Tabs } from "antd";

import "./index.less";

const { TabPane } = Tabs;

class NewsFeedCard extends Component {
    static propTypes = {
        title: PropTypes.string,
        isMobile: PropTypes.bool,
    };

    static defaultProps = {
        title: "What's going on?",
        isMobile: false,
    };

    render() {
        return (
            <Card className="news-feed-card" title={<h1 className="news-feed-title">{this.props.title}</h1>}>
                <Tabs defaultActiveKey="1" tabPosition={this.props.isMobile ? "top" : "left"} style={{ height: 220 }}>
                    <TabPane tab="WIT News" key="1">
                        WIT News
                    </TabPane>
                    <TabPane tab="WSG News" key="2">
                        News from WSG
                    </TabPane>
                    <TabPane tab="Issues Tracker" key="3">
                        Issue Tables
                    </TabPane>
                </Tabs>
            </Card>
        );
    }
}

export default NewsFeedCard;
