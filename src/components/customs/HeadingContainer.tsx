import { PropsWithChildren } from 'react';

const HeadingContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex items-start gap-5 mb-8">{children}</div>;
};

export default HeadingContainer;
