import React from 'react';
import { Badge } from '../ui/badge';
import { Card, CardDescription } from '../ui/card';

interface Props {
  title: number | string;
  icon: React.ReactNode;
  currency?: string;
}

const BadgeCard = ({ title, icon, currency }: Props) => {
  return (
    <Card className="inline-flex gap-3 px-3 py-1 rounded-[100px] hover:border-orange-300">
      <CardDescription className="text-orange-300 text-[14px]">
        {icon}
      </CardDescription>
      <CardDescription className="text-[14px] text-orange-300">
        {currency}
        {title}
      </CardDescription>
    </Card>
  );
};

export default BadgeCard;
