/**
 * Created by eden90267 on 2016/12/27.
 */
var server = require('./server');
var router = require('./router');
var handlers = require('./requestHandlers');

// 使用 Object 來對應 pathname 與 request handlers
var req = {
    '/': handlers.start,
    '/start': handlers.start,
    '/send': handlers.send
};

// 傳遞route物件與request handler
server.start(router.route, req);