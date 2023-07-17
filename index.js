"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Grid = function Grid(props) {
  // passing a number to display this number of columns with equal width
  // passing other value to define any type of template like '1fr 2fr'
  var pattern = props.columns.split(" ");
  var template = "";
  pattern.length === 1 || pattern.length === 0 ? template = "repeat(".concat(props.columns || 1, ", 1fr)") : template = "".concat(pattern.join(" "));
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid",
    style: {
      display: "grid",
      gridTemplateColumns: template,
      gap: props.gap || "1em"
    }
  }, props.children);
};
var _default = Grid;
exports["default"] = _default;
