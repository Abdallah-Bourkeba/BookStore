import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-500  text-white font-bold py-1 px-4 rounded-lg w-fit"
      >
        <BsArrowLeft className="inline-block" />
      </Link>
    </div>
  );
};

export default BackButton;
