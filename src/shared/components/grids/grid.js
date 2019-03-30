import React from 'react';
import classNames from 'classnames';

const Grid = props => {
  const {
    tag: Tag,
    children,
    className,
    breakpoints,
    ...attributes
  } = props;

  let classes = [];
  breakpoints.forEach(bp => {
    if(bp in props) {
      delete attributes[bp];
      classes.push(`Grid-${bp}-${props[bp]}`);
    }
  });

  attributes.className = classNames(
    `Grid`,
    classes,
    className
  );
  
  return <Tag {...attributes}>{children}</Tag>
};

Grid.defaultProps = {
  tag: 'div',
  breakpoints: ['xs', 'sm', 'md', 'lg', 'xl']
}

export default Grid;