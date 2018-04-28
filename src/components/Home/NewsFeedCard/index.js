import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, Tabs, List, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import "./index.less";

const { TabPane } = Tabs;

class NewsFeedCard extends Component {
    static propTypes = {
        title: PropTypes.string,
        isMobile: PropTypes.bool,
        // witNewsFeedData: PropTypes.array,
    };

    static defaultProps = {
        title: "What's going on?",
        isMobile: false,
        // witNewsFeedData: [],
    };

    render() {
        return (
            <Card className="news-feed-card" title={<h1 className="news-feed-title">{this.props.title}</h1>}>
                <Tabs defaultActiveKey="1" tabPosition={this.props.isMobile ? "top" : "left"} style={{ height: 220 }}>
                    <TabPane tab="WIT News" key="1">
                        {/* <InfiniteScroll
                            initialLoad={false}
                            pageStart={0}
                            loadMore={this.handleInfiniteOnLoad}
                            hasMore={!this.state.loading && this.state.hasMore}
                            useWindow={false}
                        >
                            <List
                                dataSource={this.state.data}
                                renderItem={item => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            title={<a href={item.link}>{item.title}</a>}
                                            description={item}
                                        />
                                    </List.Item>
                                )}
                            >
                                {this.state.loading &&
                                    this.state.hasMore && (
                                        <div className="demo-loading-container">
                                            <Spin />
                                        </div>
                                    )}
                            </List>
                        </InfiniteScroll> */}
                    </TabPane>
                    {/* <TabPane tab="WSG News" key="2">
                        News from WSG
                    </TabPane>
                    <TabPane tab="Issues Tracker" key="3">
                        Issue Tables
                    </TabPane> */}
                </Tabs>
            </Card>
        );
    }
}

export default NewsFeedCard;
