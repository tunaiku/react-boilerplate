import React from 'react';
import classNames from 'classnames';

/**
 * @name FormControl
 * @param {*} props
 */
const FormControl = props => {
  /* prettier-ignore */
  const {
    tag: Tag = 'div',
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(`Form-control`, className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

export default FormControl;
