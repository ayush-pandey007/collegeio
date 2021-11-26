import { Link } from 'react-router-dom';
import clsx from 'clsx';

function SidebarOptions({ id, title, isActive }) {
  console.log(isActive);
  return (
    <>
      <Link
        className={clsx(
          'text-white z-30 w-full rounded px-2 py-1 text-base bg-accent',
          { 'border-red-400': isActive }
        )}
        to={`/${id}`}
      >
        {title}
      </Link>
    </>
  );
}

export default SidebarOptions;
