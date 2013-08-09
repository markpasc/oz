// # Client.js

    

// This module provides functions the API client must use to authenticate with its Oz ticket.

var Hawk = require('hawk');
var Hoek = require('hoek');


var internals = {};


// ## Client functions

    

// Generate an HTTP `Authorization` header suitable for sending to an Oz server. This is used when requesting an application ticket as well as authenticating to secure resources.

// The parameters are:

// * `uri`: the absolute URL of the authenticated request
// * `method`: the HTTP method used in the authenticated request
// * `ticket`: the Oz [ticket](ticket.html) to authenticate the request with
// * `options`: additional options to use in the authentication step (none are currently defined)

// When requesting an application ticket, the parameters are:

// * `uri`: the absolute URL of the app ticket endpoint
// * `method`: `'POST'`, the HTTP method used in app ticket requests
// * `ticket`: the client ticket with which to request the application ticket

exports.header = function (uri, method, ticket, options) {

    var settings = Hoek.clone(options || {});
    settings.credentials = ticket;
    settings.app = ticket.app;
    settings.dlg = ticket.dlg;

    return Hawk.client.header(uri, method, settings);
};
