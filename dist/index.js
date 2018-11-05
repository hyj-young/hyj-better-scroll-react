'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _betterScroll = require('better-scroll');

var _betterScroll2 = _interopRequireDefault(_betterScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * better-scroll 的 react 实现
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * designer: heyunjiang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * time: 2018.11.02
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * update: 2018.11.05
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var scroll = function (_React$Component) {
  _inherits(scroll, _React$Component);

  function scroll(props) {
    _classCallCheck(this, scroll);

    var _this = _possibleConstructorReturn(this, (scroll.__proto__ || Object.getPrototypeOf(scroll)).call(this, props));

    _this.scrollElement = null;
    _this.scrollObj = null;
    _this.initScroll = _this.initScroll.bind(_this);
    _this.destory = _this.destory.bind(_this);
    return _this;
  }

  _createClass(scroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initScroll();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destory();
    }
  }, {
    key: 'initScroll',
    value: function initScroll() {
      var _this2 = this;

      if (!this.scrollObj) {
        this.scrollObj = new _betterScroll2.default(this.scrollElement, _extends({
          pullDownRefresh: true,
          pullUpLoad: true
        }, this.props.initOptions));

        if (this.props.pullingDownFunc) {
          this.scrollObj.on('pullingDown', function () {
            _this2.props.pullingDownFunc(function () {
              _this2.scrollObj.refresh();
              _this2.scrollObj.finishPullDown();
            });
          });
        }
        if (this.props.pullingUpFunc) {
          this.scrollObj.on('pullingUp', function () {
            _this2.props.pullingUpFunc(function () {
              _this2.scrollObj.refresh();
              _this2.scrollObj.finishPullUp();
            });
          });
        }
      }
    }
  }, {
    key: 'destory',
    value: function destory() {
      if (this.scrollObj) {
        this.scrollObj.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(scrollElement) {
            _this3.scrollElement = scrollElement;
          },
          className: this.props.className || 'scrollDefaultBox' },
        this.props.children
      );
    }
  }]);

  return scroll;
}(_react2.default.Component);

scroll.propTypes = {
  children: _propTypes2.default.element.isRequired,
  pullingDownFunc: _propTypes2.default.func,
  pullingUpFunc: _propTypes2.default.func,
  className: _propTypes2.default.string,
  initOptions: _propTypes2.default.object
};
exports.default = scroll;