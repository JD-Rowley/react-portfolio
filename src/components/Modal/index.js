import React from 'react';
import './index.css';

function Modal({ onClose, currentImage }) {
    const {title, github} = currentImage;

    return(
        <div className="modal-container">
            <div className="modal-">
                <h3>{title}</h3>
                <img src={require(`../assets/project_img/${github}.JPG`).default} alt="title" />
                <button onClick={onClose} type="button" className="btn close-btn">Close</button>
            </div>
        </div>
    );
}

export default Modal;