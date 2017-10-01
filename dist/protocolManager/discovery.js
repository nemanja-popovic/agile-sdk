'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var discovery = function discovery(base) {
  var protocolBase = base.slice(0, -1);
  base = base + '/discovery';
  return {
    /**
    * @summary Start device discovery on all or single protocol
    * @name start
    * @public
    * @function
    * @memberof agile.protocolManager.discovery
    * @param [protocolId] - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.discovery.start().then(function() {
    *   console.log('All protocols discovery is on');
    * });
    * agile.protocolManager.discovery.start('Bluetooth LE').then(function() {
    *   console.log('Bluetooth LE protocols discovery is on');
    * });
    **/
    start: function start(protocolId) {
      var url = base;
      if (protocolId) {
        url = protocolBase + '/' + protocolId + '/discovery';
      }
      return (0, _axios2.default)({
        method: 'POST',
        url: url
      });
    },
    /**
    * @summary Stop device discovery on all or single protocol
    * @name stop
    * @public
    * @function
    * @memberof agile.protocolManager.discovery
    *
    * @param [protocolId] - Agile protocol Id
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.discovery.stop().then(function() {
    *   console.log('All protocols discovery is off');
    * });
    * agile.protocolManager.discovery.stop('Bluetooth LE').then(function() {
    *   console.log('Bluetooth LE discovery is off');
    * });
    **/
    stop: function stop(protocolId) {
      var url = base;
      if (protocolId) {
        url = protocolBase + '/' + protocolId + '/discovery';
      }
      return (0, _axios2.default)({
        method: 'DELETE',
        url: url
      });
    },
    /**
    * @summary Return the status object of discovery on the all or single protocol
    * @name status
    * @public
    * @function
    * @memberof agile.protocolManager.discovery
    *
    * @param [protocolId] - Agile protocol Id
    * @fulfil {Array|Object}
    * @returns {Promise}
    *
    * @example
    * agile.protocolManager.discovery.status().then(function(protocols) {
    *   console.log(protocols);
    * });
    * agile.protocolManager.discovery.status('Bluetooth LE').then(function(protocol) {
    *   console.log(protocol.status);
    * });
    **/
    status: function status(protocolId) {
      var url = base;
      if (protocolId) {
        url = protocolBase + '/' + protocolId + '/discovery';
      }
      return (0, _axios2.default)({
        method: 'GET',
        url: url
      });
    }
  };
};

exports.default = discovery;