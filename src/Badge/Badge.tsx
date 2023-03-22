import React from "react";
// import ToolTip from "../ToolTip/ToolTip";
import "./Badge.css";
const Badge: React.FC<BadgeI> = ({
  type = "primary",
  size = "medium",
  children,
  customBgColor,
  variant = "filled",
  badgeTextColor,
  helpPosition = "bottom",
  ...props
}: BadgeI): JSX.Element => {

  //filled Badge type cases
  const checkBadgeType = () => {
    switch (type) {
      case "primary":
        return "inte-badge--primary";
      case "secondary":
        return "inte-badge--seconadary";
      case "success":
        return "inte-badge--success";
      case "error":
        return "inte-badge--error";
      case "warning":
        return "inte-badge--warning";
      default:
        return "inte-badge--primary";
    }
  };
  //Accentbadge Type Case
  const checkBadgeAccentType = () => {
    switch (type) {
      case "primary":
        return "inte-accentBadge--primary";
      case "secondary":
        return "inte-accentBadge--seconadary";
      case "success":
        return "inte-accentBadge--success";
      case "error":
        return "inte-accentBadge--error";
      case "warning":
        return "inte-accentBadge--warning";
      default:
        return "inte-accentBadge--primary";
    }
  };
  //Badge size case
  const checkSize = () => {
    switch (size) {
      case "large":
        return "inte-badge--large";
      case "medium":
        return "inte-badge--medium";
      case "small":
        return "inte-badge--small";
      default:
        return "inte-badge--medium";
    }
  };
  //dot size case
  const checkDotSize = () => {
    switch (size) {
      case "large":
        return "inte-badgeDot--large";
      case "medium":
        return "inte-badgeDot--medium";
      case "small":
        return "inte-badgeDot--small";
      default:
        return "inte-badgeDot--small";
    }
  };

  const typeValue = checkBadgeType();
  const accenttypeValue = checkBadgeAccentType();
  const sizeDotsValue = checkDotSize();
  const sizeValue = checkSize();
  let icon = <></>;
  let iconClass = "";
  const { iconAlign = "left" } = props;

  if (props.icon) {
    // iconAlign !== "left" ? { paddingLeft: "1rem" } : { paddingRight: "1rem" };
    icon = <span className={`inte-badge__icon`}>{props.icon}</span>;
  }

  return (
    <div
      style={{ backgroundColor: customBgColor, color: badgeTextColor }}
      className={
        props.dot
          ? `inte-badge__dot ${sizeDotsValue}  ${typeValue} `
          : variant &&
          `inte-badge ${sizeValue}  ${variant == "accent" ? `${accenttypeValue}` : `${typeValue}`
            } ${children === undefined ? "inte-badge--onlyIcon" : ""} ${props.helpText ? "inte-badge--hasHelp" : ""
            }`.replace(/\s\s+/g, ' ').trim()
      }
    >
      {props.dot ? (
        <></>
      ) : (
        variant && (
          <>
            {iconAlign === "left" && icon}
            {children ? (
              <div className="inte-badge__content">
                {!props.helpText ? (
                  <span>{children}</span>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              ""
            )}
            {iconAlign === "right" && icon}
          </>
        )
      )}
    </div>
  );
};
export interface BadgeI {
  children?: React.ReactNode | string;
  variant?: "filled" | "accent";
  type?: "primary" | "secondary" | "success" | "error" | "warning";
  size?: "large" | "medium" | "small";
  customBgColor?: string;
  badgeTextColor?: string;
  icon?: React.ReactNode;
  iconAlign?: "left" | "right";
  dot?: boolean;
  helpText?: string | React.ReactNode;
  helpPosition?: "left" | "right" | "top" | "bottom";
}

export default Badge;
