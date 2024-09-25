import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const BackArrowBtn = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div
      onClick={goBack}
      className="bg-gray-100 h-10 w-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200"
    >
      <ChevronLeft />
    </div>
  );
};

export default BackArrowBtn;
