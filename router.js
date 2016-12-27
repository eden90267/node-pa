/**
 * Created by eden90267 on 2016/12/27.
 */
function route(pathname, handlers, res) {
    console.log("Route this request: '" + pathname + "'");

    //檢查 pathname 是否有對應的 request handlers
    if (typeof handlers[pathname] === 'function') {
        handlers[pathname](res);
    } else {
        console.log("No request handler for this pathname: '" + pathname + "'");
    }
}

exports.route = route;