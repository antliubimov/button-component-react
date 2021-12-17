import React from "react";
import "./Button.css";
import "material-icons/iconfont/material-icons.css";

export default function Button({
  label = "Default",
  variant,
  size,
  color,
  startIcon,
  endIcon,
  disableShadow,
  disabled,
}) {
  let className = "btn";
  let startIconSpan = "";
  let endIconSpan = "";

  if (variant) {
    className += ` variant ${variant}`;
  }

  if (disableShadow) {
    className += " disable_shadow";
  }
  if (disabled) {
    className += " disabled";
  }

  if (startIcon) {
    startIconSpan = (
      <span className="material-icons-round startIcon">{startIcon}</span>
    );
  }
  if (endIcon) {
    endIconSpan = (
      <span className="material-icons-round endIcon">{endIcon}</span>
    );
  }
  if (size) {
    switch (size) {
      case "sm":
        className += " sm";
        break;
      case "md":
        className += " md";
        break;
      case "lg":
        className += " lg";
        break;
    }
  }

  if (color) {
    switch (color) {
      case "default":
        className += " color--default";
        break;
      case "primary":
        className += " color--primary";
        break;
      case "secondary":
        className += " color--secondary";
        break;
      case "danger":
        className += " color--danger";
        break;
    }
  }

  return (
    <button className={className} disabled={disabled}>
      {startIconSpan}
      {label}
      {endIconSpan}
    </button>
  );
}
