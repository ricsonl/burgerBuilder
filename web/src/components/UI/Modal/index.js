import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const Modal = (props) => {
  return (
    <>
      <div
        className={`${styles.Cover} ${props.finishing ? styles.CoverVisible : null}`}
        onClick={props.toggleModal.bind(this, false)}
      ></div>
      <div className={`${styles.Modal} ${props.finishing ? styles.ModalVisible : null}`}>
        <button onClick={props.toggleModal.bind(this, false)}>
          <svg><use xlinkHref="#icon-arrow_back"></use></svg>
        </button>
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