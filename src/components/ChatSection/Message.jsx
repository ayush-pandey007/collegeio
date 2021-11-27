import { useMemo } from 'react';
import UserImage from './UserImage';
import { DateTime } from 'luxon';

const Message = ({ text, createdBy, createdAt, userImage }) => {
  const isToday = useMemo(() => {
    return (
      DateTime.fromSeconds(createdAt.seconds).toLocal === DateTime.now().toLocal
    );
  }, [DateTime.now().day]);

  const getDayTime = () => {
    if (isToday) {
      return DateTime.fromSeconds(createdAt.seconds).toLocaleString(
        DateTime.TIME_SIMPLE
      );
    }

    return DateTime.fromSeconds(createdAt.seconds).toLocaleString(
      DateTime.DATE_SHORT
    );
  };

  return (
    <div className="flex gap-3 bg-gray-800 px-3 py-2 rounded-lg max-w-xl">
      <UserImage url={userImage} />
      <div className="flex flex-col">
        <div className="w-full">
          <span className="text-purple-400 text-sm">{createdBy}</span>
          <span className="ml-4 text-gray-500 text-sm">{getDayTime()}</span>
        </div>
        <span className="text-gray-300 text-base">{text}</span>
      </div>
    </div>
  );
};

export default Message;
