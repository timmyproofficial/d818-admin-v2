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
import { Meal } from '@/entities/meal';
import { Link } from 'react-router-dom';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const mealColumns: ColumnDef<Meal>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'category.name',
    header: 'Category',
    cell: ({ row }) => {
      const meal = row.original;

      return <div className="font-semibold">{meal.category.name}</div>;
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Price
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
      }).format(amount);

      return <div className="text-center font-semibold">{formatted}</div>;
    },
  },
  // {
  //   accessorKey: 'description',
  //   header: 'Description',
  // },
  {
    id: 'actions',
    cell: ({ row }) => {
      const meal = row.original;

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
            <Link to={`/meals/${meal._id}`}>
              <DropdownMenuItem>View meal details</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
