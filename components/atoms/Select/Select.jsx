import { useState } from "react";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";

import "./select.css";

export function Select({ options }) {
  const [displayedLabel, setDisplayedLabel] = useState(options[0].label);

  const handleChange = (event) => {
    const selectedOption = options.find(
      (option) => option.value === event.target.value
    );

    setDisplayedLabel(selectedOption.label);
  };

  return (
    <div className="select-wrapper">
      <select className="native-select" onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div className="custom-trigger" aria-hidden="true">
        {displayedLabel}

        <Icon name="chevron-down" size={16} strokeWidth={2} />
      </div>
    </div>
  );
}

Select.propTypes = {
  option: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
