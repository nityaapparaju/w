import React from "react";
import './Popupstyle.css';
const Popup = ({ title, description, image, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Popup;