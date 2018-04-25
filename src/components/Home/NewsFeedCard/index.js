import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

import "./index.less";

class NewsFeedCard extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: "News Feed",
    };

    render() {
        return <Card className="news-feed-card" title={<h1 className="news-feed-title">{this.props.title}</h1>} />;
    }
}

export default NewsFeedCard;
