import React from 'react';
import classNames from 'classnames';
import { ErrorMessage } from 'formik';

const FormError = props => {
  const { tag: Tag, children, className, ...attributes } = props;

  const classes = classNames(
    `u-fs-small`,
    `u-clr-danger`,
    `u-mg-top-xxsmall`,
    className,
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

FormError.defaultProps = {
  tag: ErrorMessage,
  component: 'div',
};

export default FormError;
