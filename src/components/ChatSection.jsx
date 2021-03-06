import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import useChat from '../services/useChat';
import Spinner from '../components/Spinner';
import { PaperAirplaneIcon } from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import EmojiPicker from 'emoji-picker-react';
import sendMessage from '../services/sendMessage';
import { useAuthState } from 'react-firebase-hooks/auth';

import Message from './ChatSection/Message';

import toast from 'react-hot-toast';
import { auth } from '../firebase';
import noTabSelect from '../assets/illustrations/no-tab.svg';
import noMessage from '../assets/illustrations/no-message.svg';

const ChatSection = ({ className }) => {
  const { id } = useParams();
  const chat = useChat(id);
  const [user] = useAuthState(auth);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [messageInput, setMessageInput] = useState('');
  const emptyDivRef = useRef(null);

  const onEmojiSelect = (_e, emojiObj) => {
    const newInput = `${messageInput}${emojiObj.emoji}`;
    setMessageInput(newInput);
    setEmojiPickerVisible(false);
  };

  const deliverMessage = async (e) => {
    e.preventDefault();

    const msg = {
      text: messageInput,
      user_img: user?.photoURL,
      created_by: user?.displayName,
    };

    try {
      setMessageInput('');
      await sendMessage(id, msg);
      emptyDivRef.current.scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      toast.error('something went wrong');
    }
  };

  if (!id) {
    return (
      <div className="bg-gray-900 flex-1 flex items-center justify-center flex-col gap-8">
        <img src={noTabSelect} alt="" className="max-w-xs" />
        <h1 className="text-lg font-semibold text-purple-500">
          Select a Room to Talk
        </h1>
      </div>
    );
  }

  if (!chat) {
    return (
      <div
        className={clsx(
          'flex items-center justify-center w-full h-full flex-1',
          className
        )}
      >
        <Spinner className="h-5 w-5" />
      </div>
    );
  }

  return (
    <div
      className={clsx('flex flex-col gap-3 max-h-full bg-gray-900', className)}
    >
      {chat.length > 0 ? (
        <section className="pt-4 px-3 flex flex-col gap-5 max-h-full overflow-auto scrollbar-thin scrollbar-thumb-gray-700 hover:scrollbar-thumb-gray-800">
          {chat.map((message) => (
            <Message
              key={message?.id}
              text={message?.text}
              createdAt={message?.created_at}
              createdBy={message?.created_by}
              userImage={message.user_img}
            />
          ))}
          <div ref={emptyDivRef}></div>
        </section>
      ) : (
        <div className="flex items-center justify-center gap-8 flex-col flex-1">
          <img src={noMessage} alt="no message to show" className="max-w-xs" />
          <span className="text-lg font-semibold text-purple-500">
            Start Your Conversation now!
          </span>
        </div>
      )}
      <section className="mb-4 bottom-4 left-0 right-0 px-3 mt-auto">
        <div className="">
          <form
            onSubmit={deliverMessage}
            className="w-full px-4 py-2 bg-gray-800 rounded-md flex gap-3 items-center shadow-md"
          >
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
                    zIndex: '100',
                  }}
                  onEmojiClick={onEmojiSelect}
                />
              )}
              <EmojiHappyIcon
                className="h-5 w-5 cursor-pointer hover:text-gray-300"
                onClick={() => setEmojiPickerVisible((s) => !s)}
              />
            </div>
            <button
              type="submit"
              className="hover:bg-gray-700 transition-all px-2 py-1 rounded-md"
            >
              <PaperAirplaneIcon className="h-5 w-5 rotate-90" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ChatSection;
