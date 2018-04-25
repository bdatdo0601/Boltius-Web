import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card } from "antd";

import "./index.less";

class BasicInfoCard extends Component {
    static propTypes = {
        slogan: PropTypes.string,
        missionStatement: PropTypes.string,
        logo: PropTypes.object,
    };

    static defaultProps = {
        slogan: "Slogan",
        missionStatement: "Mission Statement",
        logo: {
            src: "https://cpb-us-e1.wpmucdn.com/sites.wit.edu/dist/0/158/files/2016/02/Untitled7.png",
            alt: "logo",
        },
    };

    render() {
        return (
            <Card
                bordered={false}
                className="basic-info-card"
                title={<h1 className="basic-info-slogan">{this.props.slogan}</h1>}
            >
                <center>
                    <img src={this.props.logo.src} alt={this.props.logo.alt} className="basic-info-logo" />
                </center>
                <p>{this.props.missionStatement}</p>
            </Card>
        );
    }
}

export default BasicInfoCard;
