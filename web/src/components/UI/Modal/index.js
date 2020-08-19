import React from 'react';
import PropTypes from 'prop-types';

import SmallIconBtn from '../SmallIconBtn'

import styles from './styles.module.css';

const Modal = (props) => {
  return (
    <>
      <div
        className={`${styles.Cover} ${props.finishing ? styles.CoverVisible : null}`}
        onClick={props.toggleModal}
      ></div>
      <div className={`${styles.Modal} ${props.finishing ? styles.ModalVisible : null}`}>
        <SmallIconBtn icon="icon-arrow_back" clicked={props.toggleModal}/>
        {props.children}
      </div>
    </>
  );
}

Modal.propTypes = {
  finishing: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
}

export default Modal;