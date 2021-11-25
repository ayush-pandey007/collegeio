import React, { useState } from 'react';
import clsx from 'clsx';
import { PlusIcon } from '@heroicons/react/outline';
import Modal from './Modal';

const SidePanel = ({ className }) => {
  const [modalOpen, setModalOpen] = useState(false);

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
        <h1>Hello modal</h1>
      </Modal>
    </div>
  );
};

export default SidePanel;
