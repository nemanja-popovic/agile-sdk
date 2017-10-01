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
  var instance = _axios2.default.create();
  instance.interceptors.response.use(function (res) {
    return res.data.result;
  });

  return {
    /**
    * @summary Evaluate policies for a particular entity and action or attribute
    * @name evaluate
    * @public
    * @function
    * @memberof agile.policies.pdp
    * @param {Array} PDP request - each element in the array includes entityId, entityType, field indicating
    *  the attribute or action to be executed. Finally the method can be read or write depending on the action to be performed.
    *  For instance the example shows the evaluation of a policy showing whether the user logged in can read the attribute password for the user with id sam!@!agile-local
    * @fulfil {Array} boolean - each elemtn in the array is a boolean value mapeed one-to-one to the PDP requests objects. Each boolean shows whether the policy evaluated in the same potition of the array was allowed or not.
    * @returns {Promise}
    * @example
    * agile.policies.pdp.evaluate([{
    *      entityId : 'sam!@!agile-local',
    *      entityType: 'user',
    *      field : 'password',
    *      method : 'read'
    *    }]).then(function(results) {
    *  console.log(results);
    * });
    **/
    evaluate: function evaluate(array) {
      return instance.request({
        method: 'POST',
        url: base + '/api/v1//pdp/batch/',
        data: {
          actions: array
        }
      });
    }

  };
};

exports.default = pdp;