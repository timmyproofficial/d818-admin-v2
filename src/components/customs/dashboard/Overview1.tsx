import SmallCard from './SmallCard';

const Overview1 = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr]">
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  );
};

export default Overview1;
