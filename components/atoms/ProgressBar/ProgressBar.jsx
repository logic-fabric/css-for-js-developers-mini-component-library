import PropTypes from "prop-types";

import { VisuallyHidden } from "../VisuallyHidden/VisuallyHidden";

import "./progressBar.css";

const PROGRESS_BAR_CSS_VALUES = {
  small: {
    "--height": "8px",
    "--padding": "0",
    "--outer-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0",
    "--outer-radius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--outer-radius": "8px",
  },
};

export function ProgressBar({ value, size = "medium" }) {
  if (value < 0 || value > 100) {
    throw new Error("ProgressBar 'value' prop must be between 0 and 100");
  }

  if (!PROGRESS_BAR_CSS_VALUES[size]) {
    throw new Error(
      `ProgressBar 'size' prop must be one of ${Object.keys(
        PROGRESS_BAR_CSS_VALUES
      ).join(", ")}`
    );
  }

  const percentage = value + "%";

  const height = PROGRESS_BAR_CSS_VALUES[size]["--height"];
  const padding = PROGRESS_BAR_CSS_VALUES[size]["--padding"];
  const outerRadius = PROGRESS_BAR_CSS_VALUES[size]["--outer-radius"];

  return (
    <div
      style={{ "--padding": padding, "--outer-radius": outerRadius }}
      className="progress-bar"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={1}
    >
      <VisuallyHidden>{percentage}</VisuallyHidden>

      <div className="progress-wrapper">
        <div
          style={{ "--width": percentage, "--height": height }}
          className="progress"
        />
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.required,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
