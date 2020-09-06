import React from 'react';
import PropTypes from 'prop-types';

import SmallIconBtn from '../SmallIconBtn'
import Backdrop from '../Backdrop';

import styles from './styles.module.css';

const Modal = (props) => {
  return (
    <>
      <Backdrop visible={props.show} clicked={props.toggleModal.bind(this, false)} />

      <div className={`${styles.Modal} ${props.show ? styles.ModalVisible : null}`}>
        <SmallIconBtn icon="icon-arrow_back" clicked={props.toggleModal} />
        {props.children}
      </div>
    </>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func
}

export default React.memo(Modal, (prevProps, nextProps) => {
  return prevProps.show === nextProps.show && prevProps.children === nextProps.children;
});