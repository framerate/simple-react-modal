import React from 'react/addons';
import classNames from 'classnames';

export default class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    clickHandler() {
        this.toggleModal();
    }

    toggleModal() {
        console.log('TOGGLE MODAL!');
    }

    render() {
        let classes = classNames('_srm-curtain', {'_srm-curtain-hidden': !this.props.visible});
        let curtainStyle = {
            visibility: visible;
            position: fixed;
            width: 100%;
            height: 100%;
            backgroundColor: rgba(0, 0, 0, 0.9);
            zIndex: 9999;
            top: 0;
            left: 0;
        };

        if (!this.props.visible) {
            curtainStyle.visibility = hidden;
            curtainStyle.display = none;
        }

        let modalStyle = {

        }
        let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
        return (
            <div className={classes} style={curtainStyle} onClick={this.props.clickHandler}>
                <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
                    <div key="_srm-modal" style={modalStyle} className="_srm-modal">
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
