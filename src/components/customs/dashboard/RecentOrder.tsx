import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Meal } from '@/entities/meal';
import useMeals from '@/hooks/useMeals';

interface Props {
  meals: Meal[];
}

const RecentOrder = ({ meals }: Props) => {
  const firstFiveMeals = meals?.slice(0, 5);
  return (
    <div className="space-y-8">
      {firstFiveMeals?.map((meal) => (
        <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={meal.image} alt={meal.name} />
            <AvatarFallback>{meal.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{meal.name}</p>
            <p className="text-sm text-muted-foreground">
              {`${meal.description.slice(0, 30)}...`}
            </p>
          </div>
          <Badge className="bg-green-700 hover:bg-orange-500 text-white ml-auto font-medium">
            £{meal.price}
          </Badge>
        </div>
      ))}
    </div>
  );
};

export default RecentOrder;
