import "../css/style.css";
import React from "react";

const Modal = ({ yourText, open, close, style }) => {
    let styleBackground;
    let styleModal;

    //Check if a style has been added
    if(!style){
        styleBackground = null;
        styleModal = null;
    }else{
        styleBackground = style[0].background;
        styleModal = style[1].modal;
    }

  if (open == true) {
    return (
      <div className="background-modal" style={styleBackground} onClick={close}>
        <div className="modal-content" style={styleModal}>
          <span className="close" onClick={close}>
            &times;
          </span>
          <p className="yourText">{yourText}</p>
        </div>
      </div>
    );
  }
};

export default Modal;
