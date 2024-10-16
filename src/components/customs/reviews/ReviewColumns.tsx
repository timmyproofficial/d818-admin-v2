import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown, Star, LucideProps } from 'lucide-react';
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
import React from 'react';

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
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Rating
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const review = row.original;
      return (
        <div className="font-semibold text-center">
          {Array.from({ length: review.rating }, (_, index) => (
            <Star
              size={16}
              className="inline fill-yellow-500 stroke-yellow-500"
              key={index}
            />
          ))}
        </div>
      );
    },
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
