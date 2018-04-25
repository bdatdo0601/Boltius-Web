import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

import "./index.less";

class SocialProfileCard extends Component {
    static propTypes = {
        title: PropTypes.string,
    };

    static defaultProps = {
        title: "Follow Us!",
    };

    render() {
        return (
            <Card
                className="social-profile-card"
                title={<h1 className="social-profile-title">{this.props.title}</h1>}
            />
        );
    }
}

export default SocialProfileCard;
