import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      axios
        .get(`http://localhost:5555/books/${id}`)
        .then((response) => {
          setBook(response.data);
          setLoading(false);
        })
        .catch((err) => {
          enqueueSnackbar("Failed to fetch book", { variant: "error" });
          console.error(err);
          setLoading(false);
        });
    };

    fetchBook();
  }, [id, enqueueSnackbar]);

  const handleDeleteBook = async () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Failed to delete book", { variant: "error" });
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading && <Spinner />}
      {book && (
        <div className="flex flex-col border-2 border-red-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            <span className="text-xl">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span className="text-xl">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span className="text-xl">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span className="text-xl">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Created At</span>
            <span className="text-xl">
              {new Date(book.createdAt).toString()}
            </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span className="text-xl">
              {new Date(book.updatedAt).toString()}
            </span>
          </div>
          <button
            className="p-2 my-4 bg-red-500 text-white rounded-md w-full"
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
