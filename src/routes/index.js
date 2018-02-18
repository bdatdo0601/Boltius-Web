import rightSideHomeLogo from "../assets/WSGLogo.png";

import Home from "../containers/Home";
import Errors from "../containers/Errors";

export const MAIN_ROUTES = Object.freeze([
    {
        TITLE: "Wentworth Student Government",
        DESCRIPTION: "We represent you and the Wentworth community to make our campus better and more efficient",
        EXTRA_DESCRIPTION: [
            { title: "Facebook", value: "witwsg" },
            { title: "Twitter", value: "#wsgwit" },
            { title: "Email", value: "wsg@wit.edu" },
            { title: "General Body Meeting Time", value: "6PM Every Monday at Beatty 412" },
        ],
        RIGHT_SIDE_IMAGE: rightSideHomeLogo,
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
    {
        TITLE: "Login",
        LINK: "/login",
        ICON: "login",
        SUBMENU: [],
        ONCLICK: () => {},
    },
]);
