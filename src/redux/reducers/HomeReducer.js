import { HomeActionTypes } from "../actions/HomeActions";

const initialState = {
    statusTableData: [],
    errorMessage: "",
    isPullStatusTableDataPending: false,
    isPullStatusTableDataDone: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case HomeActionTypes.PULL_STATUS_TABLE_DATA_FULFILLED:
            return Object.assign({}, state, {
                errorMessage: "",
                statusTableData: action.payload.data,
                isPullStatusTableDataPending: false,
                isPullStatusTableDataDone: true,
            });
        case HomeActionTypes.PULL_STATUS_TABLE_DATA_PENDING:
            return Object.assign({}, state, {
                errorMessage: "",
                isPullStatusTableDataPending: true,
                isPullStatusTableDataDone: false,
            });
        case HomeActionTypes.PULL_STATUS_TABLE_DATA_REJECTED:
            return Object.assign({}, state, {
                errorMessage: action.payload,
                isPullStatusTableDataPending: false,
                isPullStatusTableDataDone: false,
            });
        default:
            return state;
    }
};
