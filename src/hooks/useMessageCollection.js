import { useState } from 'react'

/**
 * A custom hook for managing the conversation between the user and the AI.
 *
 * @returns {Object} An object containing the `messages` array and the `addMessage` function.
 */
const useMessageCollection = () => {
  const initialMsg = {
    id: 1,
    day: 1,
    fav: 0,
    text: '(복도 끝에 문이 열려있다)',
    action: '문을 연다',
    ai: false, // 대화 메시지에서 NPC와 플레이어의 대화 구분
    chat: false,
    system: true, // 시스템 메시지
    summary: false // 요약 메시지
  }


  const [messages, setMessages] = useState([initialMsg]);

  const [chatCount, setChatCount] = useState(0);

  /**
  * A function for adding a new message to the collection.
  */
  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  }
  const addChatCount = (prev) => {
    setChatCount(prev + 1);
  }

  /**
  * A function for reseting a new message collection.
  */
  const clearMessages = () => {
    setMessages([initialMsg]);
    setChatCount(0);
    console.log('clearMessages')
  }

  const clearChatCount = () => setChatCount(0);

  return [messages, addMessage, clearMessages, chatCount, addChatCount, clearChatCount];
}

export default useMessageCollection