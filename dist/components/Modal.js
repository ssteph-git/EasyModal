"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("../css/style.css");
var _react = _interopRequireDefault(require("react"));
var Modal = function Modal(_ref) {
  var yourText = _ref.yourText,
    open = _ref.open,
    close = _ref.close,
    style = _ref.style;
  var styleBackground;
  var styleModal;

  //Check if a style has been added
  if (!style) {
    styleBackground = null;
    styleModal = null;
  } else {
    styleBackground = style[0].background;
    styleModal = style[1].modal;
  }
  if (open == true) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "background-modal",
      style: styleBackground,
      onClick: close
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "modal-content",
      style: styleModal
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "close",
      onClick: close
    }, "\xD7"), /*#__PURE__*/_react.default.createElement("p", {
      className: "yourText"
    }, yourText)));
  }
};
var _default = Modal;
exports.default = _default;