import React, { memo } from "react";
import classNames from "classnames";

const Form = memo(props => {
  /* prettier-ignore */
  const { 
    tag: Tag = 'form', 
    children, 
    className, 
    ...attributes
  } = props;

  const classes = classNames(`Form`, className);

  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  );
});

export default Form;
