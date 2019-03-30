import React from 'react';
import classNames from 'classnames';

const Container = props => {
  /* prettier-ignore */
  const {
    tag: Tag,
    children,
    className,
    fullWidth,
    ...attributes
  } = props;

  attributes.className = classNames(
    `Container`,
    fullWidth ? `Container--fullWidth` : null,
    className,
  );

  return <Tag {...attributes}>{children}</Tag>;
};

Container.defaultProps = {
  tag: 'div',
};

export default Container;
