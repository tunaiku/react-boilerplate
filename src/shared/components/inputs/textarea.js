import React from 'react';
import classNames from 'classnames';

const Textarea = props => {
  /* prettier-ignore */
  const {
    tag: Tag = 'textarea',
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(`Textarea`, className);

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

export default Textarea;
