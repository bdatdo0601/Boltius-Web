const ON_NAVBAR_CHANGE = "ON_NAVBAR_CHANGE";

export const GlobalActionTypes = {
    ON_NAVBAR_CHANGE,
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
};
