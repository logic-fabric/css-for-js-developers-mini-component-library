import React from "react";
import PropTypes from "prop-types";

import { Crumb } from "../../atoms/Crumb/Crumb";

import "./breadcrumbs.css";

export function Breadcrumbs({ crumbs = [], ...props }) {
  if (crumbs.length === 0) {
    return null;
  }

  return (
    <nav {...props}>
      <ul className="crumb-list">
        {crumbs.map((crumb, index) => {
          return (
            <Crumb
              {...crumb}
              isLastCrumb={index === crumbs.length - 1}
              key={crumb.name}
            />
          );
        })}
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};