import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/D818 - SVG.svg';
import { Link } from 'react-router-dom';
import ColorModeSwitch from './ColorModeSwitch';
import { Button } from '../ui/button';
import useLogout from '@/hooks/useLogout';
import { AvatarDropDown } from './AvatarDropDown';
import userAuthStore from '@/store';

const Navbar = () => {
  const { user } = userAuthStore();
  const { mutate, isLoading, error } = useLogout();
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <Image src={logo} alt="D818 Logo" boxSize="60px" />
      </Link>
      {/* <ColorModeSwitch /> */}
      {/* <Button className="mt-3" onClick={() => mutate()}>
        Logout
      </Button> */}
      <AvatarDropDown user={user} mutate={mutate} />
    </div>
  );
};

export default Navbar;
