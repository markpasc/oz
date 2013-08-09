// # Oz

// Oz is a web authorization protocol.

// Suppose there's a server that provides a web API. There are registered users of that API who want to use client software that operates the API on their behalf. How do the users authorize the clients to access the API?

// Note that the goal is to *authorize* the client as the user. That means we really have to:

// * *Authenticate* the user to the API server.
// * *Authorize* the client application as an approved operator for that user's server content.
// * *Provide* credentials to the client that it can reuse to operate the server on the user's behalf.

// Oz calls these credentials *tickets*. At the end of the process, the client application ends up with an *application ticket* it can use to authenticate to the server and use its authorized services.

// # Index.js

// This is the main file of Oz. It imports all oz's dependencies and submodules.

// ## Dependencies

    

// [**Boom**](https://github.com/spumko/boom) is an HTTP-friendly error library.
exports.error = exports.Error = require('boom');
// [**Hawk**](https://github.com/hueniverse/hawk) is a password based authentication scheme that Oz is based on.
exports.hawk = require('hawk');

// ## Submodules

    

// The `client` module contains functions for performing client operations, namely encoding an authentication request into an HTTP header.
exports.client = require('./client');
exports.server = require('./server');
// The `endpoints` module is where functions that a web server operating as an Oz authentication service reside.
exports.endpoints = require('./endpoints');
exports.ticket = require('./ticket');
exports.scope = require('./scope');
