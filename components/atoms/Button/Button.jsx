import React from "react";
import PropTypes from "prop-types";

import "./button.css";

export function Button({ label, type = "fill", size = "medium", ...delegated }) {
  return (
    <button
      className={["btn", `btn--${type}`, `btn--${size}`].join(" ")}
      type="button"
      {...delegated}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["fill", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};
