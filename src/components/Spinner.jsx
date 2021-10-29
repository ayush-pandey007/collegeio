import React from 'react';
import clsx from 'clsx';

import propTypes from 'prop-types';

const Spinner = (props) => {
  const { className, ...rest } = props;
  return (
    <svg
      {...rest}
      className={clsx('animate-spin', className)}
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM3.98246 14C3.98246 19.5325 8.46746 24.0175 14 24.0175C19.5325 24.0175 24.0175 19.5325 24.0175 14C24.0175 8.46746 19.5325 3.98246 14 3.98246C8.46746 3.98246 3.98246 8.46746 3.98246 14Z"
        fill="#E1CFFD"
      />
      <path
        d="M27.0345 19.1089C26.3636 20.8206 25.3621 22.3835 24.0872 23.7081C22.8123 25.0328 21.289 26.0934 19.6042 26.8294C17.9195 27.5653 16.1062 27.9622 14.2681 27.9974C12.4299 28.0326 10.6028 27.7054 8.89108 27.0345C7.17936 26.3636 5.61655 25.3621 4.29187 24.0872C2.9672 22.8123 1.9066 21.289 1.17064 19.6042C0.434682 17.9195 0.0377698 16.1062 0.00256667 14.2681C-0.0326364 12.4299 0.29456 10.6028 0.965473 8.89108L4.67329 10.3444C4.19322 11.5692 3.9591 12.8765 3.98429 14.1918C4.00948 15.5071 4.29349 16.8045 4.8201 18.0101C5.3467 19.2156 6.1056 20.3056 7.05346 21.2178C8.00131 22.13 9.11957 22.8466 10.3444 23.3267C11.5692 23.8068 12.8765 24.0409 14.1918 24.0157C15.5071 23.9905 16.8045 23.7065 18.0101 23.1799C19.2156 22.6533 20.3056 21.8944 21.2178 20.9465C22.13 19.9987 22.8466 18.8804 23.3267 17.6556L27.0345 19.1089Z"
        fill="#8739FA"
      />
    </svg>
  );
};

Spinner.propTypes = {
  className: propTypes.string,
};

export default Spinner;