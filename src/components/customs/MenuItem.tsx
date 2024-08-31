import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  link: string;
  icon: React.ReactNode;
  text: string;
}

const MenuItem = ({ link, icon, text }: Props) => {
  const location = useLocation();
  const currentLink = location.pathname;
  return (
    <Link to={link} style={{ display: 'flex', gap: '8px' }}>
      <div
        className={classNames({
          'flex gap-2 items-center text-gray-500': true,
          '!active-link': link === currentLink,
        })}
      >
        <span>{icon}</span>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
