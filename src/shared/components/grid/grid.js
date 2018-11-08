import React, { memo } from 'react';
import classNames from 'classnames';

/**
 * Container component to render swr container to UI
 * @param {*} children => react children
 * @param {string} className => custom / extenable classname for container componet
 * @param {string} customElement => custom element html tag
 * @returns
 */
export const Container = memo(({ children, className, customElement, id }) => {
  const containerClassNames = classNames('container', className);

  const CustomElement = customElement ? customElement : 'div';

  return (
    <CustomElement id={id} className={containerClassNames}>
      {children}
    </CustomElement>
  );
});

/**
 *
 * Row UI Component
 * @param {boolean} isGapless => determine how  row component should use padding or not in its column component
 * @param {string} className => custom / extenable classname for row componet
 * @param {*} children => react children
 * @param {string} customElement => custom element html tag
 * @returns
 */

export const Row = memo(({ isGapless, className, children, customElement, id }) => {
  const rowClassNames = classNames(
    'row',
    {
      'row--is-gapless': isGapless
    },
    className
  );

  const CustomElement = customElement ? customElement : 'div';

  return (
    <CustomElement id={id} className={rowClassNames}>
      {children}
    </CustomElement>
  );
});

/**
 * Column UI Component
 *
 * @param {string} xs => number of space for column in default screen
 * @param {string} sm => number of space for column in small screen
 * @param {string} md => number of space for column in medium screen
 * @param {string} lg => number of space for column in large screen
 * @param {string} xl => number of space for column in extra large screen
 * @param {string} className => custom / extenable classname for column componet
 * @param {*} children
 * @param {string} customElement => custom element html tag
 * @returns
 */
export const Column = memo(({ xs, sm, md, lg, xl, className, children, customElement, id }) => {
  const columnClassNames = classNames(
    'column',
    {
      [`column-${xs}`]: xs,
      [`column-sm-${sm}`]: sm,
      [`column-md-${md}`]: md,
      [`column-lg-${lg}`]: lg,
      [`column-xl-${xl}`]: xl
    },
    className
  );

  const CustomElement = customElement ? customElement : 'div';

  return (
    <CustomElement id={id} className={columnClassNames}>
      {children}
    </CustomElement>
  );
});
