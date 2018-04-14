import { GlobalActionTypes } from "../actions/GlobalActions";

const initialState = {
    isCollapsed: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GlobalActionTypes.ON_NAVBAR_CHANGE:
            return Object.assign({}, state, {
                isCollapsed: !state.isCollapsed,
            });
        default:
            return state;
    }
};
