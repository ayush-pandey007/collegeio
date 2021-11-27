import UserImage from './UserImage';

const Message = ({ text, createdBy, createdAt, userImage }) => {
  return (
    <div className="flex gap-3 bg-accent px-3 py-2 rounded-lg max-w-xl">
      <UserImage url={userImage} />
      <div className="flex flex-col">
        <div className="w-full">
          <span className="text-green-400 text-sm">{createdBy}</span>
          {/* <span>{JSON.stringify(createdAt)}</span> */}
        </div>
        <span className="text-gray-300 text-base">{text}</span>
      </div>
    </div>
  );
};

export default Message;
