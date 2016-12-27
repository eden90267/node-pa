/**
 * Created by eden90267 on 2016/12/27.
 */
var querystring = require('querystring');

/**
 * Global variables
 *
 * @type {Array}
 */
var history = [];

function start(query) {
    console.log("Handler 'start' is started.");
    console.log("query string is: " + query);
}

function send(query) {
    console.log("Handler 'send' is started.");
    console.log("query string is: " + query);

    var parsedstring = querystring.parse(query);

    var obj = {
        message: parsedstring.m,
        username: parsedstring.u,
        timestamp: (new Date()).getTime()
    };

    history.push(obj);

    //////// DEBUG ////////
    for (var i = 0; i < history.length; i++) {
        console.log("[" + i + "]: " + history[i].message);
    }
}

exports.start = start;
exports.send = send;