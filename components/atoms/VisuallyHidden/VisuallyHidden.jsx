import { useEffect, useState } from "react";

import "./visuallyHidden.css";

export function VisuallyHidden({ children, ...delegated }) {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (event) => {
        if (event.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (event) => {
        if (event.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  });

  if (forceShow) {
    return children;
  }

  return (
    <div className="visually-hidden-wrapper" {...delegated}>
      {children}
    </div>
  );
}
