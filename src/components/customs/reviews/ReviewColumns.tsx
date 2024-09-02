import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Review } from '@/entities/review';
import { Link } from 'react-router-dom';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const reviewColumns: ColumnDef<Review>[] = [
  {
    accessorKey: 'customer.fullName',
    header: 'Customer',
  },
  {
    accessorKey: 'product.name',
    header: 'Product',
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const review = row.original;

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
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            <Link to={`/reviews/${review._id}`}>
              <DropdownMenuItem>View review details</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
