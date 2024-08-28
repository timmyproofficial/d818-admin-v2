import { HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/D818 - SVG.svg';
import { Link } from 'react-router-dom';
import ColorModeSwitch from './ColorModeSwitch';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <Link to="/">
        <Image src={logo} alt="D818 Logo" boxSize="60px" />
      </Link>
      {/* <ColorModeSwitch /> */}
      <Button className="mt-3">Logout</Button>
    </div>
  );
};

export default Navbar;
