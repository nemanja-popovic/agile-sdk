'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscription = function subscription(base) {
  base = base + '/record';
  return {
    /**
    * @summary Get records from gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.record
    * @param [query] {String} - Basic query that is transformed to influx sql
    * @fulfil {Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.record.get()
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    *
    * const query = 'where={"deviceID":"mySensor"}&order={"by":"time","direction":"ASC"}'
    * agile.data.record.get(query)
    * .then(function(records) {
    *   console.log(records);
    * });
    **/
    get: function get(query) {
      // TODO make this smarter and pass and object instead

      return (0, _axios2.default)({
        method: 'GET',
        url: query ? base + '?' + query : base
      });
    }
  };
};

exports.default = subscription;