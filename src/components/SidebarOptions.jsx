import { Link } from 'react-router-dom';
import clsx from 'clsx';

function SidebarOptions({ id, title, isActive }) {
  return (
    <>
      <Link
        className={clsx(
          'text-white z-30 w-full rounded px-2 py-1 text-base bg-gray-800 shadow-md transition-all hover:bg-purple-500',
          { 'bg-purple-500 -mr-1': isActive }
        )}
        to={`/${id}`}
      >
        {title}
      </Link>
    </>
  );
}

export default SidebarOptions;
