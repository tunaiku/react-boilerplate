import React from 'react';
import classNames from 'classnames';

const Input = props => {
  /* prettier-ignore */
  const { 
    tag: Tag = 'input',
    className, 
    children, 
    ...attributes
  } = props;

  const classes = classNames(`Input`, className);

  return <Tag {...attributes} className={classes} />;
};

export default Input;
