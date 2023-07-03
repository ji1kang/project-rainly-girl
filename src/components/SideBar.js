import React, { useContext, useEffect, useState } from 'react';
import {
  MdReportGmailerrorred,
  MdOutlineRestartAlt,
  MdSpeakerNotes,
  MdOutlineVpnKey
} from 'react-icons/md';
import { TITLE } from '../assets/script';
import { ChatContext } from '../context/chatContext';

import umbrella32 from '../assets/icon/umbrella/umbrella32.png';
import Modal from './Modal';
import PromptStatus from './PromptStatus';
import Setting from './Setting';

/**
 * A sidebar component that displays a list of nav items and a toggle
 * for switching between light and dark modes.
 *
 * @param {Object} props - The properties for the component.
 */
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [messages, addMessage, clearMessages, chatCount, addChatCount, clearChatCount] = useContext(ChatContext);

  const [settingModalOpen, setSettingModalOpen] = useState(false);
  const [promptModalOpen, setPromptModalOpen] = useState(false);

  function handleResize() {
    window.innerWidth <= 720 ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    handleResize();
  }, []);

  const clearChat = () => clearMessages();

  return (
    <section className={`w-80 sidebar`}>
      <div className='sidebar__app-bar'>
        <div className={`sidebar__app-logo`}>
          <span className='w-16 h-8'>
            <img src={umbrella32} alt='logo' />
          </span>
        </div>
        <h1 className={`sidebar__app-title`}>
          {TITLE}
        </h1>
      </div>



      <div className='nav'>
        <span className='border nav__item border-neutral-600' onClick={clearChat}>
          <div className='nav__icons'>
            <MdOutlineRestartAlt />
          </div>
          <h1>처음부터</h1>
        </span>

      </div>

      <div className='px-4 text-white text-sm'>
        <p>모든 대화가 지워집니다</p>
      </div>

      <div className='nav'>
        <span className='border nav__item border-neutral-600' onClick={clearChat}>
          <div className='nav__icons'>
            <MdSpeakerNotes />
          </div>
          <h1>지금까지의 기록</h1>
        </span>

      </div>

      <div className='px-4 text-white text-sm'>
        {messages.filter((item) => item.summary).map((item) => (
          <p className='py-1'>Day {item.day}: {item.text}</p>
        ))}
      </div>

      <div className='nav__bottom'>
        <div onClick={() => setSettingModalOpen(true)} className='nav'>
          <span htmlFor='setting-modal' className='nav__item'>
            <div className='nav__icons'>
              <MdOutlineVpnKey />
            </div>
            <h1>OpenAI Key</h1>
          </span>
        </div>
        <div onClick={() => setPromptModalOpen(true)} className='nav'>
          <span htmlFor='setting-modal' className='nav__item'>
            <div className='nav__icons'>
              <MdReportGmailerrorred />
            </div>
            <h1>프롬프트 확인</h1>
          </span>
        </div>
      </div>

      <Modal title='Setting' modalOpen={settingModalOpen} setModalOpen={setSettingModalOpen}>
        <Setting modalOpen={settingModalOpen} setModalOpen={setSettingModalOpen} />
      </Modal>

      <Modal title='프롬프트 확인 (for developer)' modalOpen={promptModalOpen} setModalOpen={setPromptModalOpen}>
        <PromptStatus modalOpen={promptModalOpen} setModalOpen={setPromptModalOpen} />
      </Modal>
    </section >
  );
};

export default SideBar;
