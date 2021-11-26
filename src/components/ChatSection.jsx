import React from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';

const ChatSection = ({ className }) => {
  const { id } = useParams();

  return (
    <div className={clsx('', className)} style={{ backgroundColor: '#161223' }}>
      <h1>{id}</h1>
    </div>
  );
};

export default ChatSection;
