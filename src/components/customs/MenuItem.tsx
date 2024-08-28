import { LucideProps } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  link: string;
  icon: React.ReactNode;
  text: string;
}

const MenuItem = ({ link, icon, text }: Props) => {
  return (
    <NavLink
      to={link}
      style={{ display: 'flex', gap: '8px' }}
      className={({ isActive }) => (isActive ? 'active-link' : '')}
    >
      <div className="flex gap-2 items-center">
        <span className="text-gray-500 text-xs">{icon}</span>
        <span className="text-gray-600">{text}</span>
      </div>
    </NavLink>
  );
};

export default MenuItem;
