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
    header: 'Sub Total',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total',
  },
  {
    accessorKey: 'deliveryStatus',
    header: 'Delivery Status',
    cell: ({ row }) => {
      const order = row.original;

      return (
        <span className="flex justify-center items-center rounded-full p-1 w-8 bg-gray-200">
          {order.deliveryStatus === 'pending' ? (
            <Badge className="text-orange-600">{order.deliveryStatus}</Badge>
          ) : (
            <Badge className="text-green-600">{order.deliveryStatus}</Badge>
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
