'use strict';

var _protocolManager = require('./protocolManager');

var _protocolManager2 = _interopRequireDefault(_protocolManager);

var _deviceManager = require('./deviceManager');

var _deviceManager2 = _interopRequireDefault(_deviceManager);

var _device = require('./device');

var _device2 = _interopRequireDefault(_device);

var _protocol = require('./protocol');

var _protocol2 = _interopRequireDefault(_protocol);

var _idm = require('./idm');

var _idm2 = _interopRequireDefault(_idm);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _policies = require('./policies');

var _policies2 = _interopRequireDefault(_policies);

var _audit = require('./audit');

var _audit2 = _interopRequireDefault(_audit);

var _urlParse = require('url-parse');

var _urlParse2 = _interopRequireDefault(_urlParse);

var _clone = require('lodash/clone');

var _clone2 = _interopRequireDefault(_clone);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  * @namespace agile
  * @description
  * Welcome to the Agile SDK documentation.
  *
  * This document aims to describe all the functions supported by the SDK, as well as showing examples of their expected usage.
  *
  * If you feel something is missing, not clear or could be improved, please don't hesitate to open an [issue in GitHub](https://github.com/agile-iot/agile-sdk/issues/new), we'll be happy to help.
  * @param {Object} - including the api base url, idm base url (if not provided defaults to the same api host but default idm port), and a token.
  * @returns {Object}
  * @example
  * var agile = require('agile-sdk')({
      api:'http://agile-core:8080',
      idm: 'http://agile-core:3000',
      data: 'http://agile-data:1338',
      token: 'zIOycOqbEQh4ayw7lGAm9ILBIr'
    })
*/
var agileSDK = function agileSDK(params) {
  // backwards compatibility
  if (typeof params === 'string' || params instanceof String) {
    params = { api: params };
  }
  // parse url to remove any irregularites
  var parsed = (0, _urlParse2.default)(params.api);
  var apiBase = params.api.indexOf('/') === 0 ? params.api + '/api' : parsed.origin + '/api';
  var idmBase = params.idm ? params.idm : '' + (0, _clone2.default)(parsed).set('port', 3000).origin;
  var dataBase = params.data ? params.data : '' + (0, _clone2.default)(parsed).set('port', 1338).origin;
  var wsBase = (0, _clone2.default)(parsed).set('protocol', 'ws:').origin + '/ws';
  // for now we keep it as const... but token in the sdk should be updated once in a while, since it can expire.
  // for now we just create a new SDK object each time
  var token = (0, _utils.tokenSet)(params.token);
  return {
    /**
    * @summary Set/Update Idm Authentication token
    * @name tokenSet
    * @public
    * @function
    * @memberof agile
    * @param {String} token - Idm Authentication token
    * @returns {String} token - Newly set Idm Authentication token
    * @example
    * agile.tokenSet('1234');
    **/
    tokenSet: _utils.tokenSet,
    /**
    * @summary Get Idm Authentication token
    * @name tokenGet
    * @public
    * @function
    * @memberof agile
    * @returns {String}
    * @example
    * agile.tokenGet();
    **/
    tokenGet: _utils.tokenGet,
    /**
    * @summary Unset/delete Idm Authentication token
    * @name tokenDelete
    * @public
    * @function
    * @memberof agile
    * @returns {String}
    * @example
    * agile.tokenDelete();
    **/
    tokenDelete: _utils.tokenDelete,
    /**
    * @namespace protocolManager
    * @memberof agile
    **/
    protocolManager: (0, _protocolManager2.default)(apiBase),
    /**
    * @namespace deviceManager
    * @memberof agile
    **/
    deviceManager: (0, _deviceManager2.default)(apiBase),
    /**
    * @namespace device
    * @memberof agile
    **/
    device: (0, _device2.default)(apiBase, wsBase),
    /**
    * @namespace protocol
    * @memberof agile
    **/
    protocol: (0, _protocol2.default)(apiBase),
    /**
    * @namespace idm
    * @memberof agile
    **/
    idm: (0, _idm2.default)(idmBase),
    /**
    * @namespace data
    * @memberof agile
    **/
    data: (0, _data2.default)(dataBase),
    /**
    * @namespace policies
    * @memberof agile
    **/
    policies: (0, _policies2.default)(idmBase, token),
    /**
    * @namespace audit
    * @memberof agile
    **/
    audit: (0, _audit2.default)(idmBase, token)

  };
};

module.exports = agileSDK;