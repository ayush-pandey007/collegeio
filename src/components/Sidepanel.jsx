import React, { useState } from 'react';
import clsx from 'clsx';
import { PlusIcon } from '@heroicons/react/outline';
import Modal from './Modal';
import { db } from '../Firebase';
import SidebarOptions from './SidebarOptions';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const SidePanel = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userInput, setuserInput] = useState('');
  const [channel, setChannel] = useState([]);
  let temp = [];

  const createChannel = async () => {
    setModalOpen(false);
    if (userInput.length !== 0) {
      addDoc(collection(db, 'rooms'), {
        name: userInput,
      });
    }
    const querySnapshot = await getDocs(collection(db, 'rooms'));
    querySnapshot.forEach((doc) => {
      temp = [...temp, doc.data().name];
    });
    setChannel(temp);
  };

  return (
    <div
      className={clsx('flex flex-col items-center', className)}
      style={{ backgroundColor: '#241B38' }}
    >
      <button
        className="flex gap-4 items-center text-base bg-accent px-2 py-1 rounded-md mt-3"
        onClick={() => setModalOpen(true)}
      >
        <span>Create Channel</span>
        <PlusIcon className="h-5 w-5" />
      </button>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        className="bg-gray-900 p-4 rounded-md text-white"
      >
        <div className="flex flex-col">
          <h1>Enter Channel Name</h1>
          <input
            className="text-black mt-2"
            type="text"
            onChange={(e) => setuserInput(e.target.value)}
          />
          <button
            className="p-2 bg-blue-600 rounded-md w-24 mt-4"
            onClick={createChannel}
          >
            create
          </button>
        </div>
      </Modal>

      {channel.map((data) => (
        <SidebarOptions key={data.id} title={data} />
      ))}
    </div>
  );
};

export default SidePanel;
