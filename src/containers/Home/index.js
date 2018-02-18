import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Card, Badge } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { HomeActions } from "../../redux/actions/HomeActions";
import tableData from "../../config/static/tableData";
import Status from "../../config/static/Status";

const statusTableColumn = [
    {
        title: "Task ID",
        dataIndex: "id",
        key: "id",
        width: "8%",
    },
    {
        title: "Task Name",
        dataIndex: "title",
        key: "title",
        width: "15%",
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
        width: "17%",
    },
    {
        title: "Requestor",
        dataIndex: "requestor",
        key: "requestor",
        width: "25%",
        render: (text, record) => (
            <span>
                {text} (<a href={`mailto:${record.requestoremail}`}>{record.requestoremail}</a>)
            </span>
        ),
    },
    {
        title: "Assigned Officer",
        dataIndex: "assignedofficer",
        key: "assignedofficer",
        width: "25%",
        render: (text, record) => (
            <span>
                {text} (<a href={`mailto:${record.officeremail}`}>{record.officeremail}</a>)
            </span>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        width: "10%",
        render: text => {
            const currentStatus = Object.keys(Status).find(status => text === Status[status].TITLE);
            return <Badge status={Status[currentStatus].TYPE} text={text} />;
        },
    },
];

class Home extends Component {
    static propTypes = {
        pullStatusTableData: PropTypes.func,
        isPullStatusTableDataPending: PropTypes.bool,
        isPullStatusTableDataDone: PropTypes.bool,
    };

    static defaultProps = {
        isPullStatusTableDataDone: false,
        isPullStatusTableDataPending: false,
        pullStatusTableData: () => {},
    };

    state = {
        data: [],
        secondsElapsed: 0,
        currentPage: 1,
    };

    tick = () => {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }, () => {
            const { secondsElapsed } = this.state;
            if (secondsElapsed % 10 === 0) {
                const newPage =
                    this.state.currentPage === Math.floor(this.state.data.length / tableData.STATUS_TABLE_PAGE_SIZE) + 1
                        ? 1
                        : this.state.currentPage + 1;
                this.setState({
                    currentPage: newPage,
                });
            }
            if (secondsElapsed % 300 === 0) {
                this.props.pullStatusTableData();
            }
        });
    };

    componentWillMount() {
        this.props.pullStatusTableData();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillReceiveProps(newProps) {
        if (!this.props.isPullStatusTableDataDone && newProps.isPullStatusTableDataDone) {
            this.setState({
                data: newProps.statusTableData.filter(row => row.title !== ""),
                currentPage: 1,
                secondsElapsed: 0,
            });
        }
    }

    render() {
        return (
            <Card loading={this.props.isPullStatusTableDataPending}>
                <Table
                    bordered
                    rowKey={record => record.id}
                    columns={statusTableColumn}
                    dataSource={this.state.data}
                    pagination={{ pageSize: tableData.STATUS_TABLE_PAGE_SIZE, current: this.state.currentPage }}
                />
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return { ...state.HomeReducer };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...HomeActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
