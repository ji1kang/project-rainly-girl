import React, { useEffect, useState } from 'react';
import { checkApiKey } from '../utils/checkKeys';

const Setting = ({ modalOpen, setModalOpen }) => {
  const apiKey = window.localStorage.getItem('api-key') || '';
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [input, setInput] = useState('');

  const saveKey = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const keys = input;

    await checkApiKey(keys)
      .then(() => {
        window.localStorage.setItem('api-key', keys);
        setModalOpen(false);
      })
      .catch(() => {
        setErrorMsg('error: incorrect keys');
      });

    setLoading(false);
  };

  const removeApiKey = () => {
    window.localStorage.removeItem('api-key');
    setInput('');
  };

  useEffect(() => {
    if (modalOpen) {
      setInput(apiKey);
    }
  }, [apiKey, modalOpen]);

  return (
    <form
      onSubmit={saveKey}
      className='flex flex-col gap-2'>
      <p className='p-1' >플레이를 위한 API 키를 입력하세요.</p>
      <p className='italic p-1'>
        API 키 발급받기 (
        <a
          className='text-blue-600'
          rel='noreferrer'
          target='_blank'
          href='https://platform.openai.com/account/api-keys'>
          link
        </a>
        )
      </p>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type='password'
        className='w-full max-w-xs input input-bordered'
      />
      <button disabled={loading} className='w-full max-w-xs btn btn-outline'>
        {loading ? (
          <span className='w-56 progress progress-info' />
        ) : (
          '등록'
        )}
      </button>
      {apiKey && input && (
        <span
          onClick={removeApiKey}
          disabled={loading}
          className='w-full max-w-xs btn btn-error'>
          키 삭제
        </span>
      )}
      <p>{errorMsg}</p>
    </form>
  );
};

export default Setting;
