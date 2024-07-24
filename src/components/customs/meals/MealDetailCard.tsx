import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Category } from '@/entities/category';
import BadgeCard from '../BadgeCard';
import { CalendarClock, LayoutTemplate, Wallet } from 'lucide-react';

interface Props {
  name: string;
  description: string;
  price: number;
  category: Category;
  createdAt: string;
}

const MealDetailCard = ({
  name,
  description,
  price,
  category,
  createdAt,
}: Props) => {
  return (
    <Card className="w-[50%] self-center rounded-none border-0 shadow-none">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-2">
        <BadgeCard icon={<Wallet size="20" />} currency="£" title={price} />
        <BadgeCard icon={<LayoutTemplate size="20" />} title={category?.name} />
        <BadgeCard icon={<CalendarClock size="20" />} title={createdAt} />
      </CardContent>
    </Card>
  );
};

export default MealDetailCard;
