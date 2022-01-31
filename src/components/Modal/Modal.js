import React, { Component } from "react";
import { createPortal } from "react-dom";
import propTypes from "prop-types";
import style from "./modal.module.css";
import s from "./Screenshot_1.png";

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

  ahndleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.ahndleBackdropClick}>
        <div className={style.Modal}>
          <img src={s} alt="" />
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
