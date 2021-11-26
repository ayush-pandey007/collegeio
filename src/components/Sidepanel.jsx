import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { PlusIcon } from '@heroicons/react/outline';
import Modal from './Modal';
import SidebarOptions from './SidebarOptions';
import getRooms from '../services/getRooms';
import addRoom from '../services/addRoom';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const SidePanel = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userInput, setuserInput] = useState('');
  const [rooms, setRooms] = useState([]);

  const { id } = useParams();

  const refetch = async () => {
    try {
      const data = await getRooms();
      setRooms(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    try {
      const fetchRooms = async () => {
        const data = await getRooms();
        setRooms(data);
      };
      fetchRooms();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  const createRoom = async (roomName) => {
    toast.promise(addRoom({ name: roomName }), {
      success: (id) => {
        setModalOpen(false);
        refetch();
        return 'Room Created 🔥';
      },
      loading: 'Creating room',
      error: 'Something went wrong',
    });
  };

  return (
    <div
      className={clsx('flex flex-col items-center px-3', className)}
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

      <section className="flex flex-col gap-3 mt-3 w-full">
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
