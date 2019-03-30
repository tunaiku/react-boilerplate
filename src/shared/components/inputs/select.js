import React from "react";
import classNames from "classnames";

const Select = props => {
  /* prettier-ignore */
  const { 
    tag: Tag = 'select', 
    className,
    isLoading,
    children, 
    ...attributes 
  } = props;

  const classes = classNames(`Select`, isLoading ? `Select--loading` : null, className);

  attributes.disabled = attributes.disabled || isLoading;

  return (
    <div className={classes}>
      <Tag {...attributes}>{children}</Tag>
    </div>
  );
};

export default Select;
