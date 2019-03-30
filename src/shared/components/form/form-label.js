import React from 'react';
import classNames from 'classnames';

/**
 * @name FormLabel
 * @param {*} props
 */
const FormLabel = props => {
  /* prettier-ignore */
  const { 
    tag: Tag = 'label',
    children,
    className,
    ...attributes
  } = props;

  const classes = classNames(`Form-label`, className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

export default FormLabel;
