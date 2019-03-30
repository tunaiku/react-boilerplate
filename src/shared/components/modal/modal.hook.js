import { useState } from 'react';

const useModal = () => {
  const [visibility, setVisibility] = useState();

  const toggleModal = () => setVisibility(!visibility);

  return {
    visibility,
    toggleModal,
  };
};

export default useModal;
