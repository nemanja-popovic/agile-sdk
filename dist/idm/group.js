'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var group = function group(base, token) {
  base = '' + base;
  return {
    /**
    * @summary Get a particular group by name and owner
    * @name get
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} [owner] - Owner of the group
    * @param {String} [groupName] - Name of the group
    * @fulfil {Array} all groups if no arguments are provided, otherwise the group with given name and owner.
    * @returns {Promise}
    * @example
    * agile.idm.group.get('agile!@!agile-local','my-group').then(function(group) {
    *   console.log('this is my group '+JSON.stringify(group));
    * });
    * agile.idm.group.get().then(function(groups) {
    *   console.log('these are all groups '+JSON.stringify(groups));
    * });
    **/
    get: function get(owner, name) {
      var url = owner && name ? base + '/api/v1/user/' + owner + '/group/' + name : base + '/api/v1/group';
      return _axios2.default.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary Create a group onwned by the authenticated user
    * @name create
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} groupName - Name of the group
    * @fulfil {Object} group created
    * @returns {Promise}
    * @example
    * agile.idm.group.create('ble-devices').then(function(group) {
    *   console.log('group created!'+group);
    * });
    **/
    create: function create(name) {
      return _axios2.default.request({
        method: 'POST',
        url: base + '/api/v1/group/',
        data: {
          group_name: name
        }
      });
    },
    /**
    * @summary Delete a group
    * @name delete
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {String} owner - Owner of the group
    * @param {String} groupName - Name of the group
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.delete('agile!@!agile-local','my-group').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: function _delete(owner, name) {
      return _axios2.default.request({
        method: 'DELETE',
        url: base + '/api/v1/user/' + owner + '/group/' + name
      });
    },
    /**
    * @summary Add entity to a group
    * @name addEntity
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {Object} containing the owner of the group,
      the name of the group,
      the id of the entity to be added to the group,
      and the Type of the entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.addEntity({
          owner: 'agile!@!agile-local',
          name: 'my-group',
          entityId: '1',
          entityType: 'device'
        }).then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    addEntity: function addEntity(params) {
      return _axios2.default.request({
        method: 'POST',
        url: base + '/api/v1/user/' + params.owner + '/group/' + params.name + '/entities/' + params.entityType + '/' + params.entityId
      });
    },
    /**
    * @summary Remove entity from a group
    * @name removeEntity
    * @public
    * @function
    * @memberof agile.idm.group
    * @param {Object} containing the owner of the group,
      the name of the group,
      the id of the entity to be removed to the group,
      and the Type of the entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.group.removeEntity({
          owner: 'agile!@!agile-local',
          name: 'my-group',
        entityId: '1',
          entityType: 'device'
        }).then(function(updated) {
    *   console.log('entity updated !'+updated);
    * });
    **/
    removeEntity: function removeEntity(params) {
      return _axios2.default.request({
        method: 'DELETE',
        url: base + '/api/v1/user/' + params.owner + '/group/' + params.name + '/entities/' + params.entityType + '/' + params.entityId
      });
    }
  };
};

exports.default = group;