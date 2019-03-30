import { createContext } from 'react';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export const SnackbarContext = createContext({
  visible: false,
  openSnackbar: () => null,
  closeSnackbar: () => null
});

/**
 * @name SnackbarProvider
 * @desc A context provider for Snackbar component.
 * @param {*} param children | Pass children prop to display all content inside Provider.
 * @return <SnackbarContext.Provider />
 */

export const SnackbarProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const [visible, setVisibility] = useState(false);
  const [timeouts, setTimeouts] = useState([]);
  const [ref, setRef] = useState(null);

  const openSnackbar = obj => {
    // Hide any instantiated snackbar to display the next snackbar.
    if (visible) {
      closeSnackbar();
    }

    setValue(obj.value);

    // Clear any existing timeouts before displaying the next snackbar.
    clearTimeouts();
    setTimeouts([...timeouts, setTimeout(() => setVisibility(true), 500)]);
  };

  const beforeClosing = () => {
    if (ref) {
      ref.current.className = classNames('Snackbar', 'is-hiding');
    }
  };

  const closeSnackbar = () => {
    beforeClosing();

    return setTimeouts([...timeouts, setTimeout(() => setVisibility(false), 250)]);
  };

  const clearTimeouts = () => {
    // Remove concurrent timeout instances.
    for (var i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }

    // Clean timeout local state.
    setTimeouts([]);
  };

  useEffect(() => {
    if (visible) {
      setTimeouts([...timeouts, setTimeout(() => closeSnackbar(), 5000)]);

      if (ref) {
        ref.current.className = classNames('Snackbar', 'is-opening');
      }
    }
  }, [visible, ref]);

  return (
    <SnackbarContext.Provider
      value={{
        visible,
        openSnackbar,
        closeSnackbar,
        setRef,
        value
      }}>
      {children}
    </SnackbarContext.Provider>
  );
};
