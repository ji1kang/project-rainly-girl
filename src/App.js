import { ChatContextProvider } from './context/chatContext';
import SideBar from './components/SideBar';
import ChatView from './components/ChatView';
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

import GameGuide from './components/GameGuide'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const apiKey = window.localStorage.getItem('api-key');
    if (!apiKey) {
      setModalOpen(true);
    }
  }, []);
  return (
    <ChatContextProvider>
      <Modal title='게임 가이드' modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <GameGuide modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
      <div className='flex transition duration-500 ease-in-out min-w-[1024px]'>
        <SideBar />
        <ChatView />
      </div>
    </ChatContextProvider>
  );
};

export default App;
