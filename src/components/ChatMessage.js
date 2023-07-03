import React from 'react';

/**
 * A chat message component that displays a message with a timestamp and an icon.
 *
 * @param {Object} props - The properties for the component.
 */
const ChatMessage = (props) => {
  const { id, text, fav, system, day, ai, summary } = props.message;


  if (!system && !summary) {
    const displayName = ai ? "정체불명의 소녀" : "나"
    const displayFav = fav > 0 ? `♥︎ +${fav}` : `♡ ${fav}`

    return (
      <div
        key={id}
        className={`${ai && 'bg-light-white'} flex-row-reverse message animate-fade-in`}>

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
    let replacedText = text.replace(/유저/g, '나');
    replacedText = replacedText.replace(/NPC/g, '소녀');

    return (
      <div key={id} className='message flex-row-reverse"'>
        <div className='message__wrapper message__system'>
          [시스템] ~Day {day} 의 기록~ {replacedText}
        </div>

      </div>
    );
  } else {
    return (
      <div key={id} className='message flex-row-reverse"'>
        <div className='message__wrapper message__system'>
          {text}
        </div>

      </div>
    );
  }
};

export default ChatMessage;
