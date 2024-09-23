import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown, GraduationCap, User } from 'lucide-react';
import moment from 'moment';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Order } from '@/entities/order';
import { Badge } from '@/components/ui/badge';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const orderColumns: ColumnDef<Order>[] = [
  {
    accessorKey: 'customer.fullName',
    header: 'Customer',
  },
  {
    accessorKey: 'subTotal',
    header: () => <div className="text-center">Sub Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('subTotal'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
      }).format(amount);

      return <div className="text-center font-semibold">{formatted}</div>;
    },
  },
  {
    accessorKey: 'totalPrice',
    header: () => <div className="text-center">Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('totalPrice'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
      }).format(amount);

      return <div className="text-center font-semibold">{formatted}</div>;
    },
  },
  {
    accessorKey: 'deliveryStatus',
    header: () => <div className="text-center">Delivery Status</div>,
    cell: ({ row }) => {
      const order = row.original;

      return (
        <span className="flex justify-center">
          {order.deliveryStatus === 'pending' ? (
            <Badge className="bg-orange-400 hover:bg-orange-700 text-white cursor-pointer">
              {order.deliveryStatus}
            </Badge>
          ) : (
            <Badge className="bg-green-400 hover:bg-green-700 text-white cursor-pointer">
              {order.deliveryStatus}
            </Badge>
          )}
        </span>
      );
    },
  },
  {
    accessorKey: 'dateOrdered',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date ordered
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const order = row.original;

      const formattedDate = moment(order.dateOrdered).format(
        'MMM Do YY, h:mm:ss a'
      );

      return (
        <Badge className="bg-gray-100 text-black; hover:bg-gray-200 cursor-pointer text-center font-semibold">
          {formattedDate}
        </Badge>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const order = row.original;

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
            <DropdownMenuSeparator />
            <DropdownMenuItem>View order</DropdownMenuItem>
            <DropdownMenuItem>Update delivery status</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
