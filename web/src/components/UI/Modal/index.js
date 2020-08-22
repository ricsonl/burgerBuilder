import React from 'react';
import PropTypes from 'prop-types';

import SmallIconBtn from '../SmallIconBtn'
import Backdrop from '../Backdrop';

import styles from './styles.module.css';

const Modal = (props) => {
  return (
    <>
      <Backdrop visible={props.finishing} clicked={props.toggleModal.bind(this, false)} />

      <div className={`${styles.Modal} ${props.finishing ? styles.ModalVisible : null}`}>
        <SmallIconBtn icon="icon-arrow_back" clicked={props.toggleModal} />
        {props.children}
      </div>
    </>
  );
}

Modal.propTypes = {
  finishing: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default React.memo(Modal, (prevProps, nextProps) => {
  return prevProps.finishing == nextProps.finishing
});