import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {
  return (
    <div className="border-2 border-gray-200 rounded-lg p-4 m-4 hover:shadow-md duration-300 relative">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="m-2 text-gray-500 ">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2 ">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="text-xl font-semibold">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-2">
        <BiUserCircle className="text-red-300 text-2xl" />{" "}
        <h2 className="text-md ">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-4 p-4 mt-2">
        <Link
          to={`/books/details/${book._id}`}
          className="text-2xl text-green-800 hover:text-black"
        >
          <BsInfoCircle />
        </Link>
        <Link
          to={`/books/edit/${book._id}`}
          className="text-2xl text-yellow-800 hover:text-black"
        >
          <AiOutlineEdit />
        </Link>
        <Link
          to={`/books/delete/${book._id}`}
          className="text-2xl text-red-800 hover:text-black"
        >
          <MdOutlineDelete />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
