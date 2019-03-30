import React from 'react';
import classNames from 'classnames';

const Section = props => {
  const {
    tag: Tag = 'section',
    size,
    theme,
    className,
    children,
    ...attributes
  } = props;

  const classes = classNames(
    `Section`,
    theme ? `Section--${theme}` : null,
    size ? `Section--${size}` : null,
    className,
  );

  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};

export default Section;
