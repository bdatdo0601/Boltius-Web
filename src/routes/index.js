import Home from "../containers/Home";
import Errors from "../containers/Errors";

export const MAIN_ROUTES = Object.freeze([
    {
        TITLE: "Home",
        PATH: "/",
        EXACT: true,
        COMPONENT: Home,
    },
]);

export const ERROR_ROUTES = Object.freeze([
    {
        TITLE: "PAGE NOT FOUND",
        PATH: "*",
        EXACT: false,
        COMPONENT: Errors,
    },
]);

export const SIDE_BAR_ITEMS = Object.freeze([
    {
        TITLE: "Overview",
        LINK: "/",
        ICON: "dashboard",
        SUBMENU: [],
        ONCLICK: () => {},
    },
]);
