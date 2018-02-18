/**
 * convert data from route
 */
export default class RouteAdapter {
    static toRouteList = routes => {
        const routeList = {};
        routes.forEach(route => {
            routeList[route.PATH] = {
                TITLE: route.TITLE,
                DESCRIPTION: route.DESCRIPTION,
                EXTRA_DESCRIPTION: route.EXTRA_DESCRIPTION,
                RIGHT_SIDE_IMAGE: route.RIGHT_SIDE_IMAGE,
            };
        });
        return routeList;
    };
}
