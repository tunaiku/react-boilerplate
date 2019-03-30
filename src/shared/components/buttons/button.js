import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = props => {
  /* prettier-ignore */
  const {
    theme,
    raised,
    to,
    href,
    fullWidth,
    className,
    children,
    isLoading,
    ...attributes
  } = props;

  let Tag = href ? "a" : "button";

  const classes = classNames(
    `Button`,
    theme ? `Button--${theme}` : null,
    raised ? `Button--raised` : null,
    fullWidth ? `Button--fullWidth` : null,
    className
  );

  attributes.href = href;

  return (
    <Tag className={classes} disabled={isLoading} {...attributes}>
      {children} {isLoading && <FontAwesomeIcon icon="spinner" spin />}
    </Tag>
  );
};

export default Button;
