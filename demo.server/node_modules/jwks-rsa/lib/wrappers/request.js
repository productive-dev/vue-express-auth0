'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = function (options, cb) {
  var requestOptions = {
    baseURL: options.uri,
    headers: options.headers,
    timeout: options.timeout
  };

  if (options.proxy) {
    var proxy = _url2.default.parse(options.proxy);

    var _proxy$auth$split = proxy.auth.split(':'),
        _proxy$auth$split2 = _slicedToArray(_proxy$auth$split, 2),
        username = _proxy$auth$split2[0],
        password = _proxy$auth$split2[1];

    requestOptions.proxy = {
      host: proxy.hostname,
      port: proxy.port,
      auth: { username: username, password: password }
    };
  }

  if (options.agentOptions || options.strictSSL) {
    var agentOptions = _extends({}, options.strictSSL && { rejectUnauthorized: options.strictSSL }, options.agentOptions);
    requestOptions.httpAgent = new _http2.default.Agent(agentOptions);
    requestOptions.httpsAgent = new _https2.default.Agent(agentOptions);
  }

  (0, _axios.request)(requestOptions).then(function (response) {
    return cb(null, response);
  }).catch(function (err) {
    return cb(err);
  });
};

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _axios = require('axios');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;