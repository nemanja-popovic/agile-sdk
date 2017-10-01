'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var idm = function idm(base) {
  base = '' + base;

  return {
    /**
    * @summary Get the user information for the user currently logged in, i.e. token provided when agileSDK was created
    * @name getCurrentUserInfo
    * @public
    * @function
    * @memberof agile.idm.user
    * @fulfil {Object} userInfo - object with user information
    * @returns {Promise}
    * @example
    * agile.idm.user.getCurrentUserInfo().then(function(info) {
    *  console.log(info);
    * });
    **/
    getCurrentUserInfo: function getCurrentUserInfo() {
      return _axios2.default.request({
        method: 'GET',
        url: base + '/oauth2/api/userinfo'
      });
    },
    /**
    * @summary Show information for a particular user by username and authentication type
    * @name get
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} userName user name
    * @param {String} authType authentication type
    * @fulfil {Object} user found
    * @returns {Promise}
    * @example
    * agile.idm.user.get('alice','agile-local').then(function(user) {
    *   console.log(user);
    * });
    **/
    get: function get(userName, authType) {
      return _axios2.default.request({
        method: 'GET',
        url: base + '/api/v1/user/',
        params: {
          auth_type: authType,
          user_name: userName
        }
      });
    },
    /**
    * @summary Create user
    * @name create
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {object} including userName user name
    * @param {String} authType authentication type
    * @param {Object} [options] continaing  role  of the user as 'role' and password as 'password'
    * @fulfil {Object} user created
    * @returns {Promise}
    * @example
    * agile.idm.user.create('bob','agile-local',{'role':'admin', 'password':'secret'}).then(function(user) {
    *   console.log('user created!'+user);
    * });
    **/
    create: function create(userName, authType, options) {
      var user = {
        auth_type: authType,
        user_name: userName
      };
      if (options && options.role) {
        user.role = options.role;
      }
      if (options && options.password) {
        user.password = options.password;
      }
      return _axios2.default.request({
        method: 'POST',
        url: base + '/api/v1/user/',
        data: user
      });
    },
    /**
    * @summary Delete a user
    * @name delete
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} userName user name
    * @param {String} authType authentication type
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.delete('bob','agile-local').then(function() {
    *   console.log('user removed!');
    * });
    **/
    delete: function _delete(userName, authType) {
      return _axios2.default.request({
        method: 'DELETE',
        url: base + '/api/v1/user/',
        params: {
          auth_type: authType,
          user_name: userName
        }
      });
    },
    /**
    * @summary Reset password for any user. The user executing this action needs to be allowed to do this, e.g. admin.
    * @name resetPassword
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} userName user name
    * @param {String} authType authentication type
    * @param {String} newPassword new password
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.setPassword('bob','agile-local',"myNewPassword").then(function() {
    *   console.log('password updated!');
    * });
    **/
    resetPassword: function resetPassword(userName, authType, newPassword) {
      return _axios2.default.request({
        method: 'PUT',
        url: base + '/api/v1/user/' + userName + '!@!' + authType + '/password',
        data: {
          new_password: newPassword
        }
      });
    },
    /**
    * @summary update password for himself
    * @name updatePassword
    * @public
    * @function
    * @memberof agile.idm.user
    * @param {String} oldPassword old password
    * @param {String} newPassword new password
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.user.updatePassword("myOldPassword","myNewPassword").then(function() {
    *   console.log('password updated!');
    * });
    **/
    updatePassword: function updatePassword(oldPassword, newPassword) {
      return _axios2.default.request({
        method: 'PUT',
        url: base + '/api/v1/user/password',
        data: {
          old_password: oldPassword,
          new_password: newPassword }
      });
    }
  };
};

exports.default = idm;