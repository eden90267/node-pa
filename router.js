/**
 * Created by eden90267 on 2016/12/27.
 */
function route(pathname, query, handlers) {
    console.log("Route this request: '" + pathname + "'");

    //檢查 pathname 是否有對應的 request handlers
    if (typeof handlers[pathname] === 'function') {
        handlers[pathname](query);
    } else {
        console.log("No request handler for this pathname: '" + pathname + "'");
    }
}

exports.route = route;