import React from 'react';
import { system } from '../assets/prompt';

const PromptStatus = ({ modalOpen, setModalOpen }) => {

  return (
    <React.Fragment>
      <p className='text-lg font-semibold'></p>
      {system.split('\n').map((line, index) => (
        <p className='p-1'>{line}</p>
      ))}
    </React.Fragment>
  );
};

export default PromptStatus;
