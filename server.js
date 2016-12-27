/**
 * Created by eden90267 on 2016/12/27.
 */
var http = require('http');
var url = require('url');

var start = function (route, handlers) {
    // 具名函數, 增加程式碼可維護性
    var onRequest = function (req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        console.log('Request url: ' + req.url);

        route(pathname, url.parse(req.url).query, handlers);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    };

    http.createServer(onRequest).listen(8080); // Chaining Pattern
    console.log('Server has started.');
};

exports.start = start;