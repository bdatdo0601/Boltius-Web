import { GlobalActionTypes } from "../actions/GlobalActions";

const initialState = {
    isCollapsed: false,
    isMobile: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GlobalActionTypes.ON_NAVBAR_CHANGE:
            return Object.assign({}, state, {
                isCollapsed: !state.isCollapsed,
            });
        case GlobalActionTypes.CHECK_MOBILE_FULFILL:
            return Object.assign({}, state, {
                isMobile: action.payload,
            });
        default:
            return state;
    }
};
