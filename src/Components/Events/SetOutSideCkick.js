import React, { useEffect } from 'react';

const SetOutSideCkick = (el, initialState) => {
  const [isActive, setIsActive] = React.useState(initialState);

  useEffect(() => {
    const onClick = (e) => {
      if (el.current && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      document.addEventListener('click', onClick);
    }

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default SetOutSideCkick;
