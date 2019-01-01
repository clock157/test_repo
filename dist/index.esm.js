import { Alert, Avatar, Tooltip } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

const daaa = sa => {
  console.log(sa);
};

daaa(111111);
const AlertV = styled(Alert)`
  &.ant-alert {
    line-height: 1.2;
    margin-bottom: 16px;
  }

  & > .ant-alert-icon {
    top: 50%;
    margin-top: -8px;
    line-height: 1.2;
  }

  & > .ant-alert-close-icon {
    line-height: 1.2;
  }
`;
const propTypes = {
  id: PropTypes.string,

  /** 类型 */
  type: PropTypes.string.isRequired,

  /** 消息 */
  message: PropTypes.string.isRequired
};

const AcpAlert = props => {
  const id = `__acp_alert_${props.id}`;

  const close = () => {
    localStorage.setItem(id, true + '');
  };

  const p = objectSpread({}, props, {
    showIcon: true
  });

  if (p.neverShow) {
    if (!props.id) {
      // tslint:disable-next-line:no-console
      console.error('AcpAlert 组件设置 neverShow 时，需设置组件的 id');
      return false;
    }

    const isClose = localStorage.getItem(id) === 'true';

    if (isClose) {
      return null;
    }

    p.closeText = '不再提醒';
  }

  return React.createElement(AlertV, _extends_1({}, p, {
    onClose: () => close()
  }));
};

AcpAlert.propTypes = propTypes;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.index_avatarList__38SuE {\n  display: inline-block;\n}\n.index_avatarList__38SuE ul {\n  display: inline-block;\n  margin-left: 8px;\n  font-size: 0;\n}\n.index_avatarItem__1GxWI {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: -8px;\n  width: 32px;\n  height: 32px;\n}\n.index_avatarItem__1GxWI .ant-avatar {\n  border: 1px solid #fff;\n}\n.index_avatarItemLarge__3WX5u {\n  width: 40px;\n  height: 40px;\n}\n.index_avatarItemSmall__3OVcq {\n  width: 24px;\n  height: 24px;\n}\n.index_avatarItemMini__2pfLM {\n  width: 20px;\n  height: 20px;\n}\n.index_avatarItemMini__2pfLM .ant-avatar {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n}\n.index_avatarItemMini__2pfLM .ant-avatar .ant-avatar-string {\n  font-size: 12px;\n  line-height: 18px;\n}\n";
var styles = {"avatarList":"index_avatarList__38SuE","avatarItem":"index_avatarItem__1GxWI","avatarItemLarge":"index_avatarItemLarge__3WX5u","avatarItemSmall":"index_avatarItemSmall__3OVcq","avatarItemMini":"index_avatarItemMini__2pfLM"};
styleInject(css);

const avatarSizeToClassName = size => classNames(styles.avatarItem, {
  [styles.avatarItemLarge]: size === 'large',
  [styles.avatarItemSmall]: size === 'small',
  [styles.avatarItemMini]: size === 'mini'
});

const AvatarList = (_ref) => {
  let {
    children,
    size,
    maxLength,
    excessItemsStyle
  } = _ref,
      other = objectWithoutProperties(_ref, ["children", "size", "maxLength", "excessItemsStyle"]);

  const numOfChildren = React.Children.count(children);
  const numToShow = maxLength >= numOfChildren ? numOfChildren : maxLength;
  const childrenWithProps = React.Children.toArray(children).slice(0, numToShow).map(child => React.cloneElement(child, {
    size
  }));

  if (numToShow < numOfChildren) {
    const cls = avatarSizeToClassName(size);
    childrenWithProps.push(React.createElement("li", {
      key: "exceed",
      className: cls
    }, React.createElement(Avatar, {
      size: size,
      style: excessItemsStyle
    }, `+${numOfChildren - maxLength}`)));
  }

  return React.createElement("div", _extends_1({}, other, {
    className: styles.avatarList
  }), React.createElement("ul", null, " ", childrenWithProps, " "));
};

const Item = ({
  src,
  size,
  tips,
  onClick = () => {}
}) => {
  const cls = avatarSizeToClassName(size);
  return React.createElement("li", {
    className: cls,
    onClick: onClick
  }, tips ? React.createElement(Tooltip, {
    title: tips
  }, React.createElement(Avatar, {
    src: src,
    size: size,
    style: {
      cursor: 'pointer'
    }
  })) : React.createElement(Avatar, {
    src: src,
    size: size
  }));
};

AvatarList.Item = Item;

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

const initTime = props => {
  let lastTime = 0;
  let targetTime = 0;

  try {
    if (Object.prototype.toString.call(props.target) === '[object Date]') {
      targetTime = props.target.getTime();
    } else {
      targetTime = new Date(props.target).getTime();
    }
  } catch (e) {
    throw new Error('invalid target prop', e);
  }

  lastTime = targetTime - new Date().getTime();
  return {
    lastTime: lastTime < 0 ? 0 : lastTime
  };
};

class CountDown extends Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.interval = 1000;

    this.defaultFormat = time => {
      const hours = 60 * 60 * 1000;
      const minutes = 60 * 1000;
      const h = Math.floor(time / hours);
      const m = Math.floor((time - h * hours) / minutes);
      const s = Math.floor((time - h * hours - m * minutes) / 1000);
      return React.createElement("span", null, fixedZero(h), ":", fixedZero(m), ":", fixedZero(s));
    };

    this.tick = () => {
      const {
        onEnd
      } = this.props;
      let {
        lastTime
      } = this.state;
      this.timer = setTimeout(() => {
        if (lastTime < this.interval) {
          clearTimeout(this.timer);
          this.setState({
            lastTime: 0
          }, () => {
            if (onEnd) {
              onEnd();
            }
          });
        } else {
          lastTime -= this.interval;
          this.setState({
            lastTime
          }, () => {
            this.tick();
          });
        }
      }, this.interval);
    };

    const {
      lastTime: _lastTime
    } = initTime(props);
    this.state = {
      lastTime: _lastTime
    };
  }

  static getDerivedStateFromProps(nextProps, preState) {
    const {
      lastTime
    } = initTime(nextProps);

    if (preState.lastTime !== lastTime) {
      return {
        lastTime
      };
    }

    return null;
  }

  componentDidMount() {
    this.tick();
  }

  componentDidUpdate(prevProps) {
    const {
      target
    } = this.props;

    if (target !== prevProps.target) {
      clearTimeout(this.timer);
      this.tick();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  } // defaultFormat = time => (
  //  <span>{moment(time).format('hh:mm:ss')}</span>
  // );


  render() {
    const _this$props = this.props,
          {
      format = this.defaultFormat,
      onEnd
    } = _this$props,
          rest = objectWithoutProperties(_this$props, ["format", "onEnd"]);

    const {
      lastTime
    } = this.state;
    const result = format(lastTime);
    return React.createElement("span", rest, result);
  }

}

// @create-index

export { AcpAlert, AvatarList, CountDown };
