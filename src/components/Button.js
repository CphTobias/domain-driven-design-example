import React from "react";

function Button({
  secondary = false,
  className = secondary ? "secondary" : "primary",
  ...props
}) {
  return <button className={`btn ${className}`} {...props} />;
}

export { Button };
