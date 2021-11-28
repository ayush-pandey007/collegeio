import { Fragment } from 'react';
import { useAppAuthState } from '../utils';
import useLogout from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';

const Navbar = () => {
  const [user] = useAppAuthState();

  const signOut = useLogout();

  const profileDropdown = [
    {
      label: 'Logout',
      key: 'logout',
      onclick: signOut,
    },
  ];

  return (
    <div className="text-white px-4 py-2 flex items-center justify-between drop-shadow-md bg-gray-900">
      <span className="font-bold">Collegeio</span>
      <div className="flex items-center gap-4 transition-all hover:bg-gray-800 px-3 py-1 rounded-md cursor-pointer active:ring-2">
        {user && (
          <div>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="max-w-xs flex items-center gap-3">
                  <span className="text-sm">{user?.displayName}</span>
                  <img
                    src={user?.photoURL}
                    alt="profile"
                    className="h-8 w-8 rounded-full"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute -right-3 mt-2 w-48 rounded-md shadow-lg py-1 bg-white focus:outline-none">
                  {profileDropdown.map((item) => (
                    <Menu.Item key={item.label}>
                      {({ active }) => (
                        <Link
                          to={item.to}
                          onClick={item.onclick}
                          className={clsx(
                            active ? 'bg-black bg-opacity-10' : '',
                            'block px-4 py-2 text-sm text-gray-800'
                          )}
                        >
                          {item.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
