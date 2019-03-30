import React, { useContext, useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import { SnackbarContext } from './snackbar.context';
import './snackbar.scss';

const Snackbar = props => {
  /* prettier-ignore */
  const {
    tag: Tag = 'div',
    className,
    children,
    ...attributes
  } = props;

  //
  const snackbarCtx = useContext(SnackbarContext);
  const { visible, setRef, value } = snackbarCtx;
  const [rootEl, setRootEl] = useState(null);
  const snackbarEl = useRef();
  const classes = classNames(`Snackbar`, className);

  useEffect(
    () => {
      if (visible) {
        setRef(snackbarEl);
      }
    },
    [visible]
  );

  useEffect(() => {
    setRootEl(document.getElementById('outer-root'));
  }, []);

  return visible
    ? createPortal(
        <Tag {...attributes} ref={snackbarEl} className={classes}>
          {value}
        </Tag>,
        rootEl
      )
    : null;
};

export default Snackbar;
