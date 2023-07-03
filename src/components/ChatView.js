import React, { useContext, useEffect, useRef, useState } from 'react';
import { EVENT } from '../assets/event';
import { FACE, SCHOOL, ENDING } from '../assets/image';
import { CHAT_LIMIT, MOVE_NEXT_DAY, MOVE_NEXT_DAY_SYSTEM, DAY_LIMIT } from '../assets/script';
import { ChatContext } from '../context/chatContext';
import { chatModel, summaryModel } from '../utils/davinci';
import ChatMessage from './ChatMessage';

import Filter from 'bad-words';
import Image from './Image';
import Loading from './Loading';
import Modal from './Modal';
import Setting from './Setting';
import Thinking from './Thinking';

/**
 * A chat view component that displays a list of messages and a form for sending new messages.
 */
const ChatView = () => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState('');
  const [thinking, setThinking] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitStatus] = useState(false);
  const [ending, setEnding] = useState(false);

  const [messages, addMessage, , chatCount, addChatCount, clearChatCount] = useContext(ChatContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [currentFav, setFav] = useState(0);
  const [currentDay, setDay] = useState(1);
  const [imgUrl, setImageUrl] = useState(SCHOOL[0])

  /**
   * Scrolls the chat area to the bottom.
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  /**
   * Adds a new message to the chat.
   */
  const updateMessage = (newValue, rawValue, newFav, ai, chat, system, summary) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg = {
      id: id,
      day: currentDay,
      fav: newFav,
      text: newValue,
      rawText: rawValue,
      ai: ai,
      chat: chat,
      system: system,
      summary: summary
    };

    addMessage(newMsg);

    if (ai) {
      setFav(currentFav + newFav);
      addChatCount(chatCount);
    } else if (summary) {
      setDay(currentDay + 1);
      clearChatCount();

      if (currentDay >= DAY_LIMIT) {
        setEnding(true);
        endChat();
      }
    }


  };

  /**
   * Sends our prompt to our API and get response to our request from openai.
   */
  const sendMessage = async (e) => {
    e.preventDefault();

    if (formValue.length > 1) {
      const key = window.localStorage.getItem('api-key');
      if (!key) {
        setModalOpen(true);
        return;
      }

      const filter = new Filter();
      const cleanPrompt = filter.isProfane(formValue)
        ? filter.clean(formValue)
        : formValue;

      const newMsg = cleanPrompt;

      setThinking(true);
      setFormValue('');

      // update user input
      updateMessage(newMsg, newMsg, 0, false, true, false, false);


      try {
        // update AI output
        const response = await chatModel(cleanPrompt, key, messages);
        response.data && updateMessage(
          response.data.response,
          response.raw,
          response.data.fav,
          true,
          true,
          false,
          false
        );

      } catch (err) {
        window.alert(`Error: ${err} please try again later`);
      }

      setThinking(false);
    }
  };


  /**
    * Request our chats to our API and get response to our request from openai.
    */
  const requestSummary = async (e) => {
    e.preventDefault();

    const key = window.localStorage.getItem('api-key');
    if (!key) {
      setModalOpen(true);
      return;
    }

    setLoading(true);

    try {
      const response = await summaryModel(key, messages, currentDay);
      console.log('ChatView - 요약');
      response.data && updateMessage(
        response.data.response, null, 0, false, false, false, true
      );
    } catch (err) {
      window.alert(`Error: ${err} please try again later`);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // 👇 Get input value
      sendMessage(e);
    }
  };

  /**
   * Plays the ending
   */

  const initChat = (e) => {
    const scripts = EVENT[0]
    for (let i = 0; i < scripts.message.length; i++) {
      const item = scripts.message[i];
      addMessage(item);

    }
    setInitStatus(true);
    setImageUrl(FACE[0]);
  }

  const endChat = (e) => {
    const scripts = EVENT[3]
    for (let i = 0; i < scripts.message.length; i++) {
      const item = scripts.message[i];
      addMessage(item);
    }

    setImageUrl(ENDING[0]);
  }

  /**
   * Scrolls the chat area to the bottom when the messages array is updated.
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages, thinking, loading]);

  /**
   * Focuses the TextArea input to when the component is first rendered.
   */
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  /**
   * Change the character image when the currentFav is changed.
   */
  useEffect(() => {
    if (currentFav >= 3) {
      setImageUrl(FACE[2]);
    }
  }, [currentFav]);


  return (
    <div className='chatview'>

      {/* Character Area */}


      <div className='relative'>
        <div className='absolute flex-reverse'>
          <p className='character__status'><div>
            <h1>날짜</h1>
            <h1>Day {currentDay}</h1>
          </div></p>

          <p className='character__status'>
            <h1>호감도</h1>
            <h1>{currentFav}</h1>
          </p>

        </div>

        <div className='character__imagearea'>
          <Image url={imgUrl} />
        </div>

      </div>

      {/* Chat Area */}

      <main className='chatview__chatarea'>
        {messages.map((message, index) => (
          <ChatMessage key={index} message={{ ...message }} />
        ))}

        {thinking && <Thinking />}
        {loading && <Loading />}

        <span ref={messagesEndRef}></span>
      </main>

      {/* Input Area */}

      <div className={`${ending ? 'hidden' : ''}`}>

        <form className='form' onSubmit={sendMessage}>
          <div className={`flex items-stretch justify-between w-full ${!initializing | chatCount >= CHAT_LIMIT ? 'hidden' : ''}`}>
            <textarea
              ref={inputRef}
              className='chatview__textarea-message'
              value={formValue}
              onKeyDown={handleKeyDown}
              onChange={(e) => setFormValue(e.target.value)}

            />
            <button
              type='submit'
              disabled={!formValue}
              className='chatview__btn-send'
            >
              말하기
            </button>
          </div>

        </form>

        <div className={`flex items-stretch justify-between w-full ${chatCount >= CHAT_LIMIT ? '' : 'hidden'}`}>
          <div className={`chatview__system-message`}>
            <p>{MOVE_NEXT_DAY}</p>
            <p>{MOVE_NEXT_DAY_SYSTEM}</p>
          </div>
          <button
            onClick={requestSummary}
            className={`chatview__btn-send`}
          >
            다음날로
          </button>
        </div>

        <div className={`flex items-stretch justify-between w-full ${!initializing ? '' : 'hidden'}`}>
          <button
            onClick={initChat}
            className={`chatview__btn-send chatview__system-message`}
          >
            문을 연다
          </button>
        </div>

        {initializing ? <div className={`flex items-stretch mx-4`}><p>오늘의 대화 가능 횟수</p>
          <p>{chatCount}/{CHAT_LIMIT}</p> </div> : <div className={`flex items-stretch mx-4`}><p>&nbsp;</p></div>}


        <Modal title='Setting' modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </Modal>
      </div >

    </div>
  );
};

export default ChatView;
