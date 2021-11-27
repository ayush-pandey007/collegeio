import React, { useState } from 'react';
import clsx from 'clsx';
import { PlusIcon } from '@heroicons/react/outline';
import Modal from './Modal';
import SidebarOptions from './SidebarOptions';
import useRooms from '../services/useRooms';
import addRoom from '../services/addRoom';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const SidePanel = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userInput, setuserInput] = useState('');

  const { id } = useParams();

  const [rooms, refetchRooms] = useRooms();

  const createRoom = async (roomName) => {
    toast.promise(addRoom({ name: roomName }), {
      success: (id) => {
        setModalOpen(false);
        refetchRooms();
        return 'Room Created 🔥';
      },
      loading: 'Creating room',
      error: 'Something went wrong',
    });
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center max-h-full px-1 bg-trueGray-900 border-r-[1px] border-gray-700',
        className
      )}
    >
      <button
        className="flex gap-4 items-center text-base bg-purple-600 px-2 py-1 rounded-md mt-3 active:ring-2 hover:bg-purple-700"
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
          <h1 className="text-sm text-gray-200">Enter Channel Name</h1>
          <input
            className="px-2 py-1 outline-none rounded bg-gray-800 mt-2"
            placeholder="name"
            type="text"
            onChange={(e) => setuserInput(e.target.value)}
          />
          <div className="w-full mt-4 flex gap-3 justify-end">
            <button
              className="block py-1 px-2 text-base bg-blue-600 rounded-md"
              onClick={() => createRoom(userInput)}
            >
              create
            </button>
            <button
              className="block text-base py-1 px-2 bg-green-400 rounded-md"
              onClick={() => setModalOpen(false)}
            >
              close
            </button>
          </div>
        </div>
      </Modal>

      <section className="flex flex-col gap-3 pl-3 pr-4 mt-3 max-h-full w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-700">
        {rooms &&
          rooms.map((data) => (
            <SidebarOptions
              key={data.id}
              isActive={data.id === id}
              id={data.id}
              title={data.name}
            />
          ))}
      </section>
    </div>
  );
};

export default SidePanel;
