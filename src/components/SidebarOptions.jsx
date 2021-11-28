import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

function SidebarOptions({ id, title, isActive }) {
  return (
    <>
      <Link
        className={clsx(
          'text-white z-30 w-full rounded px-2 py-1 text-base bg-gray-800 shadow-md transition-all hover:bg-purple-500 capitalize',
          { 'bg-purple-500 -mr-1 ring-2 ring-purple-700': isActive }
        )}
        to={`/${id}`}
      >
        <div className="w-full flex items-center justify-between">
          <span className="text-lg">{title}</span>
          {isActive && <ChevronDoubleRightIcon className="h-5 w-5" />}
        </div>
      </Link>
    </>
  );
}

export default SidebarOptions;
