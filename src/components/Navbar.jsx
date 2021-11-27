import { useAppAuthState } from '../utils';

const Navbar = () => {
  const [user] = useAppAuthState();

  return (
    <div
      className="text-white px-4 py-2 flex items-center justify-between border-b-[1px] border-purple-900"
      style={{ backgroundColor: '#241B38' }}
    >
      <span className="font-bold">Collegeio</span>
      <div className="flex items-center gap-4 transition-all hover:bg-gray-800 px-3 py-1 rounded-md cursor-pointer active:ring-2">
        <span className="text-sm">{user?.displayName}</span>
        <img
          src={user?.photoURL}
          alt="profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
