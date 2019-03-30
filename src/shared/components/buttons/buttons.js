import React from "react";
import classNames from "classnames";

const Buttons = props => {
  /* prettier-ignore */
  const {
    tag: Tag = 'div',
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(`Buttons`, className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

export default Buttons;
