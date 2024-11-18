import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book, i) => (
        <BookSingleCard book={book} key={i}  />
      ))}
    </div>
  );
};

export default BooksCard;
