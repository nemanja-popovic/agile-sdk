'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pdp = function pdp(base, token) {
  base = '' + base;

  return {
    /**
    * @summary Get policies for a particular entity and action or attribute
    * @name get
    * @public
    * @function
    * @memberof agile.policies.pap
    * @param {Object} including entityType, entityId, and field optionally. If provided, field represents the attribute or action for which the policy is being queried.
    * The example shows how to obtain the (read and write) policy for the user with id sam!@!agile-local.
    * @fulfil {Object} Policy for the query, in case it is there
    * @returns {Promise}
    * @example
    * agile.policies.pap.get({
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password'
    *    }).then(function(results) {
    *  console.log(results);
    * });
    **/
    get: function get(params) {
      params.field = params.field || '';
      var url = base + '/api/v1/pap/' + params.entityType + '/' + params.entityId + '/' + params.field;
      return _axios2.default.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary Set policies for a particular entity and action or attribute
    * @name set
    * @public
    * @function
    * @memberof agile.policies.pap
    * @param {Object} including entityType, entityId, policy, and field optionally. If provided, field represents the attribute or action for which the policy is being queried.
    * The example shows how to make the password of sam!@!agile-local readable and writable to anyone (do not do this in production!).
    * @fulfil {Object} Policy for the entity resulting after the update
    * @returns {Promise}
    * @example
    * agile.policies.pap.set({
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password',
    *      policy :  [
    *       {
    *          op: "write"
    *        },
    *        {
    *          op: "read"
    *        }
    *      ]
    *    }).then(function(results) {
    *  console.log(results);
    * });
    **/
    set: function set(params) {
      params.field = params.field || '';
      var url = base + '/api/v1/pap/' + params.entityType + '/' + params.entityId + '/' + params.field;
      return _axios2.default.request({
        method: 'PUT',
        url: url,
        data: {
          policy: params.policy
        }
      });
    },
    /**
    * @summary Delete policies for a particular entity and action or attribute
    * @name delete
    * @public
    * @function
    * @memberof agile.policies.pap
    * @param {Object} including entityType, entityId, and field optionally. If provided, field represents the attribute or action for which the policy is to be deleted.
    * The example shows how to delete the (read and write) policy for the user with id sam!@!agile-local.
    * @fulfil {Object} Policy for the entity resulting after the update
    * @returns {Promise}
    * @example
    * agile.policies.pap.delete({
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password'
    *    }).then(function(results) {
    *  console.log(results);
    * });
    **/
    delete: function _delete(params) {
      params.field = params.field || '';
      var url = base + '/api/v1/pap/' + params.entityType + '/' + params.entityId + '/' + params.field;
      return _axios2.default.request({
        method: 'DELETE',
        url: url
      });
    }

  };
};

exports.default = pdp;