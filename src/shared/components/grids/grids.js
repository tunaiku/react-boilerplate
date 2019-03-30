import React from 'react';
import classNames from 'classnames';

const Grids = props => {
  const {
    tag: Tag,
    children,
    className,
    gapless,
    ...attributes
  } = props;

  attributes.className = classNames(
    `Grids`,
    gapless ? `is-gapless` : null,
  )
  
  return <Tag {...attributes}>{children}</Tag>
};

Grids.defaultProps = {
  tag: 'div'
}

export default Grids;