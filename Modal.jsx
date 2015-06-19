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
        let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
        return (
            <div className={classes} onClick={this.props.clickHandler}>
                <ReactCSSTransitionGroup transitionName={this.props.transitionName}>
                    <div key="_srm-modal" className="_srm-modal">
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}