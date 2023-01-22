import React, { useState, useRef, useEffect, Fragment } from 'react';
import { createPortal } from 'react-dom';
import ReactDom from 'react-dom';

const backdrop = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  zIndex: '20',
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
};
const modal = {
  position: 'fixed',
  top: '20vh',
  left: '5%',
  width: '90%',
  backgroundColor: 'white',
  padding: '1rem',
  borderRadius: '14px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  zIndex: '30',
  animation: 'slide-down 300ms ease-out forwards',
};

const Backdrop = (props) => {
  return <div style={backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div style={modal}>
      <div>{props.children}</div>
    </div>
  );
};

const modalPlaceholderElement = document.getElementById('portal');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, modalPlaceholderElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPlaceholderElement)}
    </Fragment>
  );
};

export function Portal() {
  const [closed, setClosed] = useState(false);

  return closed ? (
    <h4>Nothing to do here...</h4>
  ) : (
    <div>
      <Modal>
        <h5>I am in portal</h5>
        <button className="btn btn-dark" onClick={() => setClosed(true)}>
          Close me
        </button>
      </Modal>
    </div>
  );
}
