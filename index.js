'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Modal = (function (_React$Component) {
    function Modal(props) {
        _classCallCheck(this, Modal);

        _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, props);
        this.clickHandler = this.clickHandler.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    _inherits(Modal, _React$Component);

    _createClass(Modal, [{
        key: 'clickHandler',
        value: function clickHandler() {
            this.toggleModal();
        }
    }, {
        key: 'toggleModal',
        value: function toggleModal() {
            console.log('TOGGLE MODAL!');
        }
    }, {
        key: 'render',
        value: function render() {
            var curtainClasses = (0, _classnames2['default'])('_srm-curtain', { '_srm-curtain-hidden': !this.props.visible }, this.props.curtainClass ? this.props.curtainClass : null);
            var modalClasses = (0, _classnames2['default'])(this.props.modalClass ? this.props.modalClass : null);

            var curtainStyle = {
                visibility: 'visible',
                position: 'fixed',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                zIndex: '9999',
                top: '0',
                left: '0'
            };

            if (!this.props.visible) {
                curtainStyle.visibility = 'hidden';
                curtainStyle.display = 'none';
            }

            var modalStyle = {
                borderRadius: '3px',
                position: 'absolute',
                width: '800px',
                marginLeft: '-400px',
                marginRight: '-400px',
                top: '20%',
                left: '50%',
                right: '0',
                bottom: '0'
            };

            var ReactCSSTransitionGroup = _reactAddons2['default'].addons.CSSTransitionGroup;
            return _reactAddons2['default'].createElement(
                'div',
                { className: curtainClasses, style: this.props.curtainClass ? null : curtainStyle, onClick: this.props.clickHandler },
                _reactAddons2['default'].createElement(
                    ReactCSSTransitionGroup,
                    { transitionName: this.props.transitionName },
                    _reactAddons2['default'].createElement(
                        'div',
                        { key: '_srm-modal', style: this.props.modalClass ? null : modalStyle, className: modalClasses },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Modal;
})(_reactAddons2['default'].Component);

exports['default'] = Modal;
module.exports = exports['default'];
