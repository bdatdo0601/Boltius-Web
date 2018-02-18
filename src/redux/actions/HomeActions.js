import GetSheetDone from "get-sheet-done";
import SPREADSHEET_ID from "../../config/static/spreadsheets";

const PULL_STATUS_TABLE_DATA = "PULL_STATUS_TABLE_DATA";

const PULL_STATUS_TABLE_DATA_PENDING = "PULL_STATUS_TABLE_DATA_PENDING";
const PULL_STATUS_TABLE_DATA_FULFILLED = "PULL_STATUS_TABLE_DATA_FULFILLED";
const PULL_STATUS_TABLE_DATA_REJECTED = "PULL_STATUS_TABLE_DATA_REJECTED";

export const HomeActionTypes = {
    PULL_STATUS_TABLE_DATA_FULFILLED,
    PULL_STATUS_TABLE_DATA_PENDING,
    PULL_STATUS_TABLE_DATA_REJECTED,
};

export const HomeActions = {
    pullStatusTableData: () => ({
        type: PULL_STATUS_TABLE_DATA,
        payload: GetSheetDone.labeledCols(SPREADSHEET_ID),
    }),
};
