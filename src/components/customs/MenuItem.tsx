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
      style={{ display: 'flex', gap: '12px' }}
      className={({ isActive }) => (isActive ? 'active-link' : '')}
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
};

export default MenuItem;
