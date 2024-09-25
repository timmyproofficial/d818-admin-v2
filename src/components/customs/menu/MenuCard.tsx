import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { FilePenLine } from 'lucide-react';

interface Props {
  img: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const MenuCard = ({ img, name, description, price, category }: Props) => {
  return (
    <Card className="w-[40%] p-1">
      <div className="menu__img-Container relative">
        <img
          className="rounded-lg bg-blend-overlay menu__img"
          src={img}
          alt={name}
        />
        <div className="menu__edit-icon h-9 w-9 bg-gray-50 absolute hidden top-2 right-3 rounded-full">
          <FilePenLine className="stroke-orange-500" />
        </div>
      </div>
      <div className="menu__details p-3">
        <div className="mb-5">
          <CardTitle className="text-sm mb-1">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="menu__badges">
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-semibold mr-3">
            £{price}
          </Badge>
          <Badge className="bg-green-500 hover:bg-green-600 text-white font-semibold">
            {category}
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default MenuCard;
