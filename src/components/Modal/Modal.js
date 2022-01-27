import React, { Component } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import style from "./modal.module.css";

const modalRoot = document.querySelector("#modal__root");

//открыть модалку
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  //закрыть модалку
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  //метод для закрытия модалки по кнопке
  handleKeyDown = (e) => {
    if (e.code === `Escape`) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay}>
        <div className={style.Modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onSubmit: propTypes.func,
};

export default Modal;
