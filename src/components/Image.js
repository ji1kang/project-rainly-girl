import React from 'react';

/**
 * A component that displays an image.
 *
 * @param {string} text - The source of the image to display.
 * @returns {JSX.Element} - A JSX element representing the image.
 */
const Image = (props) => {
  return (
    <img
      className='character__img animate-fade-in'
      src={props.url}
      alt='character'
      loading='lazy'
    />
  );
};

export default Image;
