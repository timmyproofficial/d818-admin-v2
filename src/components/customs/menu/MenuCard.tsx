import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { FilePenLine } from 'lucide-react';

interface Props {
  id: string;
  img: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const MenuCard = ({ id, img, name, description, price, category }: Props) => {
  return (
    <Card className="p-1 self-start">
      <div className="menu__img-Container relative">
        <img
          className="rounded-lg bg-blend-overlay menu__img"
          src={img}
          alt={name}
        />
        <div
          onClick={() => alert('Yo!')}
          title="Edit Menu Photo"
          className="menu__edit-icon flex justify-center items-center h-9 w-9 bg-gray-50 absolute top-2 right-3 rounded-full cursor-pointer"
        >
          <FilePenLine className="stroke-orange-500" />
        </div>
      </div>
      <div className="menu__details p-3">
        <div className="mb-5">
          <Link to={`/meals/${id}`}>
            <CardTitle className="text-sm mb-1 hover:text-orange-900">
              {name}
            </CardTitle>
          </Link>
          <CardDescription>
            {`${
              description.length > 55
                ? `${description.slice(0, 54)}...`
                : description
            }`}
          </CardDescription>
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
