'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pdp = function pdp(base, token) {
  base = '' + base;
  var instance = _axios2.default.create();
  instance.interceptors.response.use(function (res) {
    return res.data.result;
  });
  return {
    /**
    * @summary Get actions performed by currently logged in user
    * @name getUserActions
    * @public
    * @function
    * @memberof agile.audit
    * @fulfil {Array} Actions actions performed by the user authenticated with the token used by the SDK. Each action has a user, entity and time field to show who executed where action when on which entity.
    * @returns {Promise}
    * @example
    * agile.policies.audit.getUserActions( ).then(function(results) {
    *  console.log(results);
    * });
    **/
    getUserActions: function getUserActions(params) {
      var url = base + '/api/v1/audit/actions/byMe';
      return instance.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary Get actions performed on entities owned by the user currently logged in
    * @name getActionsOnUsersEntities
    * @public
    * @function
    * @memberof agile.audit
    * @fulfil {Array} Actions actions performed by the user authenticated with the token used by the SDK. Each action has a user, entity and time field to show who executed where action when on which entity.
    * @returns {Promise}
    * @example
    * agile.policies.audit.getActionsOnUsersEntities( ).then(function(results) {
    *  console.log(results);
    * });
    **/
    getActionsOnUsersEntities: function getActionsOnUsersEntities(params) {
      var url = base + '/api/v1/audit/actions/myEntities';
      return instance.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary Removes actions performed on entities owned by the user currently logged in
    * @name cleanActionsOnUsersEntities
    * @public
    * @function
    * @memberof agile.audit
    * @returns {Promise}
    * @example
    * agile.policies.audit.cleanActionsOnUsersEntities( ).then(function(results) {
    *  console.log(results);
    * });
    **/
    cleanActionsOnUsersEntities: function cleanActionsOnUsersEntities(params) {
      var url = base + '/api/v1/audit/actions/myEntities';
      return instance.request({
        method: 'DELETE',
        url: url
      });
    }
  };
};

exports.default = pdp;