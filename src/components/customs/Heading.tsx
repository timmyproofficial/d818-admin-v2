interface Props {
  title: string;
  text?: string;
}

const Heading = ({ title, text }: Props) => {
  return (
    <div>
      <h1 className="mb-8">{title}</h1>
      <small>{text}</small>
    </div>
  );
};

export default Heading;
