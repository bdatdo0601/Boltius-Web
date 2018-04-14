const ON_NAVBAR_CHANGE = "ON_NAVBAR_CHANGE";
const CHECK_MOBILE_FULFILL = "CHECK_MOBILE_FULFILL";

export const GlobalActionTypes = {
    ON_NAVBAR_CHANGE,
    CHECK_MOBILE_FULFILL,
};

export const GlobalActions = {
    onNavBarChange: () => dispatch => {
        const event = document.createEvent("HTMLEvents");
        event.initEvent("resize", true, false);
        window.dispatchEvent(event);
        dispatch({
            type: ON_NAVBAR_CHANGE,
        });
    },
    checkMobileSize: () => ({
        type: CHECK_MOBILE_FULFILL,
        payload: window.matchMedia("only screen and (max-width: 760px)").matches,
    }),
};
