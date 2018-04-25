import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "react-fontawesome";
import { Card } from "antd";

import "./index.less";

const getSocialProfile = profile => (
    <div key={profile.key} className="socialProfileItem">
        <FontAwesomeIcon className="socialProfileIcon" name={profile.iconKey} size="3x" />
        <h2 className="socialProfileText">
            <a href={profile.link}>{profile.displayName}</a>
        </h2>
    </div>
);

class SocialProfileCard extends Component {
    static propTypes = {
        title: PropTypes.string,
        socialProfiles: PropTypes.array,
    };

    static defaultProps = {
        title: "Follow Us!",
        socialProfiles: [],
    };

    render() {
        return (
            <Card className="social-profile-card" title={<h1 className="social-profile-title">{this.props.title}</h1>}>
                {this.props.socialProfiles.map(profile => getSocialProfile(profile))}
            </Card>
        );
    }
}

export default SocialProfileCard;
