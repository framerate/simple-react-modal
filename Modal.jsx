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
        let curtainClasses = classNames('_srm-curtain', {'_srm-curtain-hidden': !this.props.visible}, this.props.curtainClass ? this.props.curtainClass : null);
        let modalClasses = classNames('_srm-modal', this.props.modalClass ? this.props.modalClass : null);

        let curtainStyle = {
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

        let modalStyle = {
            borderRadius: '3px',
            position: 'absolute',
            width: '800px',
            marginLeft: '-400px',
            marginRight: '-400px',
            top: '20%',
            left: '50%',
            right: '0',
            bottom: '0'
        }

        let closeStyle = {
            fontSize: '36px',
            color: '#d1d1d1',
            textTransform: 'uppercase',
            position: 'absolute',
            top: '15px',
            right: '15px'
        }




        // let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
        return (
            <div className={curtainClasses} style={this.props.curtainClass ? null : curtainStyle} onClick={this.props.clickHandler}>
                <div className="_srm-close" style={closeStyle}>&times;</div>
                <div key="_srm-modal" style={this.props.modalClass ? null : modalStyle} className={modalClasses}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
