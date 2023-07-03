import React from 'react';
import { GUIDE } from '../assets/script';
import Setting from './Setting';
const GameGuide = ({ modalOpen, setModalOpen }) => {

  return (
    <React.Fragment>
      <p className='text-lg font-semibold'></p>
      {GUIDE.split('\n').map(line => (
        <p className='p-1'>{line}</p>
      ))}
      <p>&nbsp;</p>
      <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </React.Fragment>
  );
};

export default GameGuide;
