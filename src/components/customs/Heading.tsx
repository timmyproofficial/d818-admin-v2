interface Props {
  title: string;
  description?: string;
}

const Heading = ({ title, description }: Props) => {
  return (
    <div>
      <h1 className="">{title}</h1>
      <small className="text-[#3ea061]">{description}</small>
    </div>
  );
};

export default Heading;
