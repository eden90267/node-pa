/**
 * Created by eden90267 on 2016/12/27.
 */
var http = require('http');

var start = function () {
    var onRequest = function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    };

    http.createServer(onRequest).listen(8080);
    console.log('Server has started.');
};

exports.start = start;