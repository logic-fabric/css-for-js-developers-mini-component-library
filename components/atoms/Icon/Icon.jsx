import { ChevronDown } from "react-feather";

import "./icon.css";

const ICONS = {
  "chevron-down": ChevronDown,
};

export function Icon({ name, size, strokeWidth = 1, ...delegated }) {
  const FeatherIcon = ICONS[name];

  if (!FeatherIcon) {
    throw new Error(`No icon found for name: ${name}`);
  }

  return (
    <div
      style={{ "--size": size + "px", "--stroke-width": strokeWidth + "px" }}
      className="icon-wrapper"
    >
      <FeatherIcon color="currentColor" />
    </div>
  );
}
