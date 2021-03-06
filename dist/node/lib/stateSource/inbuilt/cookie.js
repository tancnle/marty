"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var cookieFactory = defaultCookieFactory;
var StateSource = require("../stateSource");

var CookieStateSource = (function (_StateSource) {
  function CookieStateSource(options) {
    _classCallCheck(this, CookieStateSource);

    _get(Object.getPrototypeOf(CookieStateSource.prototype), "constructor", this).call(this, options);
    this._isCookieStateSource = true;
    this._cookies = cookieFactory(this.context);
  }

  _inherits(CookieStateSource, _StateSource);

  _createClass(CookieStateSource, {
    get: {
      value: function get(key) {
        return this._cookies.get(key);
      }
    },
    set: {
      value: function set(key, value, options) {
        return this._cookies.set(key, value, options);
      }
    },
    expire: {
      value: function expire(key) {
        return this._cookies.expire(key);
      }
    }
  }, {
    setCookieFactory: {
      value: function setCookieFactory(value) {
        cookieFactory = value;
      }
    }
  });

  return CookieStateSource;
})(StateSource);

function defaultCookieFactory() {
  return require("cookies-js");
}

module.exports = CookieStateSource;