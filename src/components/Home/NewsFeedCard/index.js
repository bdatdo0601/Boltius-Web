import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, Tabs, List, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import "./index.less";

const { TabPane } = Tabs;

const getMoreData = (dataSource, cursor, pageSize) => dataSource.slice(cursor, cursor + pageSize);

class NewsFeedCard extends Component {
    static propTypes = {
        title: PropTypes.string,
        isMobile: PropTypes.bool,
        witNewsFeedData: PropTypes.array,
        pageSize: PropTypes.number,
    };

    static defaultProps = {
        title: "What's going on?",
        isMobile: false,
        witNewsFeedData: [],
        pageSize: 10,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        const { witNewsFeedData, pageSize } = nextProps;
        const { newsDisplayDataCursor } = prevState;
        if (witNewsFeedData.length !== 0) {
            const distanceToNewsFeedEnd = witNewsFeedData.length - newsDisplayDataCursor;
            const cursorOffset = distanceToNewsFeedEnd > pageSize ? pageSize : distanceToNewsFeedEnd;
            return {
                newsDisplayData: getMoreData(witNewsFeedData, newsDisplayDataCursor, cursorOffset),
                newsDisplayDataCursor: newsDisplayDataCursor + cursorOffset,
                hasMore: witNewsFeedData.length > newsDisplayDataCursor + cursorOffset,
            };
        }
        return null;
    }

    constructor(props) {
        super(props);
        this.state = {
            newsDisplayData: [],
            newsDisplayDataCursor: 0,
            loading: false,
            hasMore: false,
        };
    }

    loadMoreData = () => {
        const { witNewsFeedData, pageSize } = this.props;
        const { newsDisplayDataCursor, newsDisplayData } = this.state;
        const distanceToNewsFeedEnd = witNewsFeedData.length - newsDisplayDataCursor;
        const cursorOffset = distanceToNewsFeedEnd > pageSize ? pageSize : distanceToNewsFeedEnd;
        if (!this.state.hasMore) return;
        this.setState(
            {
                newsDisplayData: newsDisplayData.concat(
                    getMoreData(witNewsFeedData, newsDisplayDataCursor, cursorOffset)
                ),
                newsDisplayDataCursor: newsDisplayDataCursor + cursorOffset,
                loading: true,
            },
            () => {
                this.setState({
                    loading: false,
                    hasMore: witNewsFeedData.length > newsDisplayDataCursor,
                });
            }
        );
    };

    render() {
        return (
            <Card className="news-feed-card" title={<h1 className="news-feed-title">{this.props.title}</h1>}>
                <Tabs defaultActiveKey="1" tabPosition={this.props.isMobile ? "top" : "left"} style={{ height: 220 }}>
                    <TabPane tab="WIT News" key="1">
                        <div className="infinite-container visible-scrollbar">
                            <InfiniteScroll
                                initialLoad={false}
                                pageStart={0}
                                loadMore={this.loadMoreData}
                                hasMore={!this.state.loading && this.state.hasMore}
                                useWindow={false}
                            >
                                <List
                                    dataSource={this.state.newsDisplayData}
                                    locale={{
                                        emptyText: "Unable to fetch news feed",
                                    }}
                                    renderItem={item => (
                                        <List.Item key={item.guid}>
                                            <List.Item.Meta
                                                title={
                                                    <a href={item.link}>
                                                        <b>{item.title}</b>
                                                    </a>
                                                }
                                                description={
                                                    item.contentSnippet.length !== 0
                                                        ? `${item.contentSnippet.slice(0, 70)}...`
                                                        : "\n"
                                                }
                                            />
                                        </List.Item>
                                    )}
                                >
                                    {this.state.loading &&
                                        this.state.hasMore && (
                                            <div className="loading-container">
                                                <Spin />
                                            </div>
                                        )}
                                </List>
                            </InfiniteScroll>
                        </div>
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
