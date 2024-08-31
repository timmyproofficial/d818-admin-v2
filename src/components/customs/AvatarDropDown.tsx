import { LogOut, LogIn, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { AuthUser } from '@/entities/auth';

interface Props {
  user: AuthUser;
  mutate: () => void;
}

export function AvatarDropDown({ user, mutate }: Props) {
  if (!user) return <LogIn />;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline">Open</Button> */}
        <Avatar className="cursor-pointer">
          <AvatarFallback>BA</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>
              {user?.firstName} {user?.lastName}
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            mutate();
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
