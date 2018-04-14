import Home from "../containers/Home";
import Errors from "../containers/Errors";

export const SIDE_BAR_ITEMS = Object.freeze([
    {
        TITLE: "Home",
        PATH: "/",
        ICON: "home",
        SUBITEMS: [],
    },
    {
        TITLE: "Resources",
        ICON: "folder",
        SUBITEMS: [{ KEY: "academic", TITLE: "Academic", PATH: "/academic" }],
    },
    {
        TITLE: "Login",
        PATH: "/login",
        ICON: "login",
        SUBITEMS: [],
    },
]);

export const MAIN_ROUTES = Object.freeze([
    {
        TITLE: "Home",
        DESCRIPTION: "Boltius Home Page",
        PATH: `${process.env.PUBLIC_URL}/`,
        EXACT: true,
        COMPONENT: Home,
    },
]);

export const ERROR_ROUTES = Object.freeze([
    {
        TITLE: "PAGE NOT FOUND",
        PATH: `${process.env.PUBLIC_URL}/*`,
        EXACT: false,
        COMPONENT: Errors,
    },
]);
