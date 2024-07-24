import { Card } from '@/components/ui/card';

interface Props {
  img: string;
  alt: string;
}

const MealImgCard = ({ img, alt }: Props) => {
  return (
    <Card className="p-2 w-[50%]">
      <img src={img} alt={alt} className="w-[100%] h-[300px] object-cover" />
    </Card>
  );
};

export default MealImgCard;
