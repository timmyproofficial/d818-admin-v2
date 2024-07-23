import {
  ShieldCheck,
  HandPlatter,
  Star,
  SquareMenu,
  Cookie,
  Settings,
  LayoutTemplate,
  School,
  UsersRound,
  MessageSquareText,
  ShoppingBasket,
  Ban,
} from 'lucide-react';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '../ui/command';
import { Link } from 'react-router-dom';
import React from 'react';
import MenuItem from './MenuItem';

interface MenuItemsInterface {
  id: number;
  link: string;
  icon: React.ReactNode;
  text: string;
}

const Sidebar = () => {
  const menuItems: MenuItemsInterface[] = [
    {
      id: 11,
      link: '/payments',
      icon: <ShieldCheck />,
      text: 'Payments',
    },
    {
      id: 1,
      link: '/admins',
      icon: <ShieldCheck />,
      text: 'Admins',
    },
    {
      id: 2,
      link: '/customers',
      icon: <UsersRound />,
      text: 'Customers',
    },
    {
      id: 3,
      link: '/meals',
      icon: <HandPlatter />,
      text: 'Meals',
    },
    {
      id: 4,
      link: '/reviews',
      icon: <Star />,
      text: 'Meal Reviews',
    },
    {
      id: 5,
      link: '/menu',
      icon: <SquareMenu />,
      text: 'Menu',
    },
    {
      id: 6,
      link: '/categories',
      icon: <LayoutTemplate />,
      text: 'Categories',
    },
    {
      id: 7,
      link: '/campuses',
      icon: <School />,
      text: 'Campuses',
    },
    {
      id: 8,
      link: '/feedback',
      icon: <MessageSquareText />,
      text: 'Feedback',
    },
    {
      id: 9,
      link: '/orders',
      icon: <ShoppingBasket />,
      text: 'Orders',
    },
    {
      id: 10,
      link: '/out-of-bound',
      icon: <Ban />,
      text: 'Out of Bound Orders',
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          icon={item.icon}
          link={item.link}
          text={item.text}
        />
      ))}
      {/* <Command style={{ overflow: 'visible' }}>
          <CommandList>
            {menuList.map((menu: any, key: number) => (
              <>
                <CommandGroup key={menu?.id} heading={menu?.group}>
                  {menu?.items.map((item: any, itemKey: number) => (
                    <Link to={item?.link}>
                      <CommandItem
                        key={item?.id}
                        className="flex gap-2 cursor-pointer"
                      >
                        {item?.icon} {item?.text}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
                <CommandSeparator />
              </>
            ))}
          </CommandList>
        </Command> */}
    </div>
  );
};

export default Sidebar;
