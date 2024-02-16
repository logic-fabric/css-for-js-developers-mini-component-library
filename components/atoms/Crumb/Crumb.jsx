import React from "react";
import PropTypes from "prop-types";

import "./crumb.css";

export function Crumb({ name, url, isLastCrumb, ...props }) {
  return (
    <li className="crumb" {...props}>
      {isLastCrumb ? (
        name
      ) : (
        <a className="crumb-link" href={url}>
          {name}
        </a>
      )}
    </li>
  );
}

Crumb.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isLastCrumb: PropTypes.bool.isRequired,
};
