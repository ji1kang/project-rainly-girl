import React from 'react';

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const ChatMessage = (props) => {
  const { id, text, fav, day, ai, chat, system, summary } = props.message;

  if (chat) {
    const displayName = ai ? "소녀" : "나"
    const displayFav = fav > 0 ? `♥︎ +${fav}` : `♡ ${fav}`

    return (
      <div
        key={id}
        className={`${ai && 'bg-light-white'} flex-row-reverse message`}>

        <div className='w-24'>
          {ai ? displayFav : ""}
        </div>

        <div className='message__wrapper'>
          {text}
        </div>


        <div className='mx-4 w-60'>
          {displayName}
        </div>

      </div>
    );
  } else if (summary) {
    return (
      <div key={id} className='message flex-row-reverse"'>
        <div className='message__wrapper message__system'>
          ~Day {day} 의 기록~ {text}
        </div>

      </div>
    );
  } else {
    return (
      <div key={id} className='message flex-row-reverse'>
        <div className='message__wrapper message__system'>
          {text}
        </div>

      </div>
    );
  }
};

export default ChatMessage;
