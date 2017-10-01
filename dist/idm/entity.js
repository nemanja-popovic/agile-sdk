'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entity = function entity(base) {
  base = '' + base;
  return {
    /**
    * @summary List all entities by type
    * @name getByType
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityType - type of entity
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getByType('device').then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByType: function getByType(entityType) {
      var url = base + '/api/v1/entity/' + entityType;
      return _axios2.default.request({
        method: 'GET',
        url: url
      });
    },
    /**
    * @summary List all entities which have a particular attribute value
    * @name getByAttributeValue
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {Array} constraints - contains objects containing objects with the property  'attributeType' to specify the attribute type and with the property 'attributeValue' to specify the expected attribute value
    * @fulfil {Array} all entities with a given type
    * @returns {Promise}
    * @example
    * agile.idm.entity.getByAttributeValue([{attributeType:'credentials.dropbox','attributeValue':'expected attribute value for dropbox credentials'}]).then(function(entities) {
    *   console.log(entities);
    * });
    **/
    getByAttributeValue: function getByAttributeValue(constraints) {
      var url = base + '/api/v1/entity/search';
      var cons = constraints.map(function (c) {
        return {
          attribute_type: c.attributeType,
          attribute_value: c.attributeValue
        };
      });
      return _axios2.default.request({
        method: 'POST',
        url: url,
        data: {
          criteria: cons
        }
      });
    },
    /**
    * @summary get Entity by entity id and type
    * @name get
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @fulfil {Object} entity entity
    * @returns {Promise}
    * @example
    * agile.idm.entity.get('1','device').then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    get: function get(entityId, entityType) {
      return _axios2.default.request({
        method: 'get',
        url: base + '/api/v1/entity/' + entityType + '/' + entityId
      });
    },
    /**
    * @summary Create a group onwned by the authenticated user
    * @name create
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @param {object} entity - An object containing the entity
    * @fulfil {Object} entity created
    * @returns {Promise}
    * @example
    * agile.idm.entity.create('1','device',{'name':'entity name'}).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    create: function create(entityId, entityType, entity) {
      return _axios2.default.request({
        method: 'POST',
        url: base + '/api/v1/entity/' + entityType + '/' + entityId,
        data: entity
      });
    },
    /**
    * @summary Delete entity
    * @name delete
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @fulfil {Undefined}
    * @returns {Promise}
    * @example
    * agile.idm.entity.delete('1','device').then(function() {
    *   console.log('group removed!');
    * });
    **/
    delete: function _delete(entityId, entityType) {
      return _axios2.default.request({
        method: 'DELETE',
        url: base + '/api/v1/entity/' + entityType + '/' + entityId
      });
    },
    /**
    * @summary Set Entity's attribute
    * @name setAttribute
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {Object} with  entityId - id of entity,
      entityType - type of entity,
      attributeName- name of the attribute,
      attribute - An object or a String containing the entity's attribute value
    * @fulfil {Object} entity updated
    * @returns {Promise}
    * @example
    * agile.idm.entity.setAttribute({
          entityId: '1',,
          entityType: 'device',
          attributeType: 'credentials',
          attributeValue: {'dropbox':'entity credentials for drop'}
        }).then(function(result) {
    *   console.log('entity created!'+result);
    * });
    **/
    setAttribute: function setAttribute(params) {
      return _axios2.default.request({
        method: 'PUT',
        url: base + '/api/v1/entity/' + params.entityType + '/' + params.entityId + '/attribute/' + params.attributeType + '/',
        data: {
          value: params.attributeValue
        }
      });
    },
    /**
    * @summary Delete Entity's attribute
    * @name deleteAttribute
    * @public
    * @function
    * @memberof agile.idm.entity
    * @param {String} entityId - id of entity
    * @param {String} entityType - type of entity
    * @param {String} attributeName- name of the attribute
    * @fulfil {Object} entity updated entity
    * @returns {Promise}
    * @example
    * agile.idm.entity.deleteAttribute('1','device','credentials').then(function(result) {
    *   console.log('entity updated!'+result);
    * });
    **/
    deleteAttribute: function deleteAttribute(entityId, entityType, attributeType) {
      return _axios2.default.request({
        method: 'DELETE',
        url: base + '/api/v1/entity/' + entityType + '/' + entityId + '/attribute/' + attributeType + '/'
      });
    },
    /**
    * @summary Get Entities schema
    * @name getEntitiesSchema
    * @public
    * @function
    * @memberof agile.idm.entity
    * @fulfil {Object} JSON Schema with the configuration for the entity format
    * @returns {Promise}
    * @example
    * agile.idm.entity.getEntitiesSchema().then(function(jsonschema) {
    *   console.log('schema for the entities'+jsonschema);
    * });
    **/
    getEntitiesSchema: function getEntitiesSchema() {
      return _axios2.default.request({
        method: 'GET',
        url: base + '/api/v1/entity_types/'
      });
    }
  };
};

exports.default = entity;