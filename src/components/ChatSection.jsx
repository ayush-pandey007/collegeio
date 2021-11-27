import React, { useState } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import useChat from '../services/useChat';
import Spinner from '../components/Spinner';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import EmojiPicker from 'emoji-picker-react';

const ChatSection = ({ className }) => {
  const { id } = useParams();
  const chat = useChat(id);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [messageInput, setMessageInput] = useState('');

  const onEmojiSelect = (_e, emojiObj) => {
    console.log(emojiObj);
    const newInput = `${messageInput}${emojiObj.emoji}`;
    setMessageInput(newInput);
    setEmojiPickerVisible(false);
  };

  if (!chat) {
    return (
      <div
        className={clsx(
          'flex items-center justify-center w-full h-full',
          className
        )}
      >
        <Spinner className="h-5 w-5" />
      </div>
    );
  }

  return (
    <div
      className={clsx('relative', className)}
      style={{ backgroundColor: '#161223' }}
    >
      <section>
        {chat.map((message) => (
          <div key={message.id}>{message.text}</div>
        ))}
      </section>
      <section className="absolute bottom-4 left-0 right-0 px-3">
        <div className="w-full px-4 py-2 bg-gray-800 rounded-md flex gap-3 items-center">
          <input
            type="text"
            value={messageInput || ''}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Ask Anything..."
            className="bg-transparent outline-none flex-1 text-gray-400"
          />
          <div>
            {emojiPickerVisible && (
              <EmojiPicker
                pickerStyle={{
                  position: 'absolute',
                  right: '30px',
                  bottom: '60px',
                  boxShadow: 'none',
                }}
                onEmojiClick={onEmojiSelect}
              />
            )}
            <EmojiHappyIcon
              className="h-5 w-5 cursor-pointer hover:text-gray-300"
              onClick={() => setEmojiPickerVisible((s) => !s)}
            />
          </div>
          <button className="hover:bg-gray-700 transition-all px-2 py-1 rounded-md">
            <PaperAirplaneIcon className="h-5 w-5 rotate-90" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChatSection;
