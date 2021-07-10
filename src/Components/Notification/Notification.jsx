import PropTypes from "prop-types";
import React from "react";

function Notification({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
