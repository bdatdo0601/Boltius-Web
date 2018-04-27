import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Row, Col } from "antd";

import { GlobalActions } from "../../redux/actions/GlobalActions";

import BasicInfoCard from "../../components/Home/BasicInfoCard";
import SocialProfileCard from "../../components/Home/SocialProfileCard";
import NewsFeedCard from "../../components/Home/NewsFeedCard";

import MainLayout from "../../layouts/MainLayout";

import RSSData from "../../utils/rss";

// Test
import homeData from "../../__mocks__/homeData";

import "./index.less";

class Home extends Component {
    static propTypes = {
        isMobile: PropTypes.bool.isRequired,
    };
    render() {
        console.log(
            RSSData.getFeed().then(data => {
                console.log(data);
            })
        );
        return (
            <MainLayout>
                <Row className="home-row" gutter={24} type="flex" justify="center" align="middle">
                    <Col className="header-column" md={14} xs={24}>
                        <BasicInfoCard
                            slogan={homeData.basics.slogan}
                            missionStatement={homeData.basics.mission}
                            logo={homeData.basics.logo}
                        />
                    </Col>
                    <Col className="header-column" md={10} xs={24}>
                        <SocialProfileCard socialProfiles={homeData.basics.socialProfiles} />
                    </Col>
                </Row>
                <Row className="home-row" gutter={24} type="flex" justify="center" align="middle">
                    <Col className="header-column" md={24} xs={24}>
                        <NewsFeedCard isMobile={this.props.isMobile} />
                    </Col>
                </Row>
            </MainLayout>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.GlobalReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...GlobalActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
