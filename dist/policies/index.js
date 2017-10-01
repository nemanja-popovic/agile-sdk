'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pdp = require('./pdp');

var _pdp2 = _interopRequireDefault(_pdp);

var _pap = require('./pap');

var _pap2 = _interopRequireDefault(_pap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var policies = function policies(base, token) {
  base = '' + base;
  return {
    /**
    * @namespace pdp
    * @memberof agile.policies
    **/
    pdp: (0, _pdp2.default)(base, token),
    /**
    * @namespace pap
    * @memberof agile.policies
    **/
    pap: (0, _pap2.default)(base, token)

  };
};

exports.default = policies;