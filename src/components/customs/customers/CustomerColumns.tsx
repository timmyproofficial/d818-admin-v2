import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown, GraduationCap, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Customer } from '@/entities/customer';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'fullName',
    header: 'Full Name',
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'phone',
    header: 'Phone Number',
    cell: ({ row }) => {
      const customer = row.original;

      return <div className="font-semibold">{customer.phone}</div>;
    },
  },

  // {
  //   accessorKey: 'address',
  //   header: 'Address',
  // },
  {
    accessorKey: 'role',
    header: 'Access Level',
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <span className="flex justify-center items-center rounded-full p-1 w-8 bg-gray-100 hover:bg-gray-200">
          {customer.role === 'student' ? (
            <GraduationCap className="text-orange-700" />
          ) : (
            <User className="text-green-700" />
          )}
        </span>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            //   onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
