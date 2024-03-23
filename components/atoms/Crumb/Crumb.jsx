import React from "react";
import PropTypes from "prop-types";

import "./crumb.css";

export function Crumb({ name, url, isLastCrumb, ...delegated }) {
  return (
    <li {...delegated}>
      {isLastCrumb ? (
        <span className="crumb crumb--current-page">{name}</span>
      ) : (
        <a className="crumb crumb--link" href={url}>
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
