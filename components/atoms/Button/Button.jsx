import React from "react";
import PropTypes from "prop-types";

import "./button.css";

export function Button({
  label,
  primary = false,
  size = "medium",
  backgroundColor = null,
  ...props
}) {
  const mode = primary ? "btn--primary" : "btn--secondary";

  return (
    <button
      className={["btn", `btn--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
};
