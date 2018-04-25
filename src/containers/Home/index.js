import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { Row, Col } from "antd";

import { GlobalActions } from "../../redux/actions/GlobalActions";

import BasicInfoCard from "../../components/Home/BasicInfoCard";
import SocialProfileCard from "../../components/Home/SocialProfileCard";
import NewsFeedCard from "../../components/Home/NewsFeedCard";

import MainLayout from "../../layouts/MainLayout";

// Test
import homeData from "../../__mocks__/homeData";

import "./index.less";

class Home extends Component {
    render() {
        return (
            <MainLayout>
                <Row gutter={16} type="flex" justify="center" align="top">
                    <Col className="header-column" md={6} xs={24}>
                        <NewsFeedCard />
                    </Col>
                    <Col className="header-column" md={10} xs={24}>
                        <BasicInfoCard
                            slogan={homeData.basics.slogan}
                            missionStatement={homeData.basics.mission}
                            logo={homeData.basics.logo}
                        />
                    </Col>
                    <Col className="header-column" md={6} xs={24}>
                        <SocialProfileCard />
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
