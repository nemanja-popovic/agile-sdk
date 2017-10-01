'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscription = function subscription(base) {
  base = base + '/subscription';
  return {
    /**
    * @summary Create subscription for device component
    * @name create
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscription] {Object} - New Subscription configuration
    * @fulfil {Object}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.create({
    *  deviceID: 'myDevice',
    *  componentID: 'temperature',
    *  interval: 3000,
    *  retention: '7d'
    * })
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    **/
    create: function create(newSubscription) {
      return (0, _axios2.default)({
        method: 'POST',
        url: base,
        data: newSubscription
      });
    },
    /**
    * @summary Delete subscription for device component
    * @name delete
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscriptionID] {String} - Agile data subscriptionID
    * @fulfil {null}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.delete('128484893938')
    * .then(function(subscription) {
    *   console.log('Subscription deleted!');
    * });
    **/
    delete: function _delete(id) {
      return (0, _axios2.default)({
        method: 'DELETE',
        url: base + '/' + id
      });
    },
    /**
    * @summary Update subscription
    * @name update
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscriptionID] {String} - Agile data subscriptionID
    * @param [subscription] {Object} - Updated Subscription configuration
    * @fulfil {Object}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.update('5991b583553d6897bd14f87d', {
    *    interval : 25000
    *  })
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    **/
    update: function update(id, subscription) {
      return (0, _axios2.default)({
        method: 'PUT',
        url: base + '/' + id,
        data: subscription
      });
    },
    /**
    * @summary Get single or all subscriptions on gateway
    * @name get
    * @public
    * @function
    * @memberof agile.data.subscription
    * @param [subscriptionID] {String} - Agile data subscriptionID
    * @fulfil {Object|Array}
    * @returns {Promise}
    *
    * @example
    * agile.data.subscription.get('5991b583553d6897bd14f87d')
    * .then(function(subscription) {
    *   console.log(subscription);
    * });
    * agile.data.subscription.get()
    * .then(function(subscriptions) {
    *   console.log(subscriptions);
    * });
    **/
    get: function get(id) {
      var url = '' + base;

      if (id) {
        var _url = base + '/' + id;
      }

      return (0, _axios2.default)({
        method: 'GET',
        url: url
      });
    }
  };
};

exports.default = subscription;