/** بسم الله الرحمن الرحيم */
import Book from "./Book";
const BookShelf = (props) => {
    const { label, books, handleUpdateShelf } = props;
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{label}</h2>
                {books && (
                    <Books
                        books={books}
                        handleUpdateShelf={handleUpdateShelf}
                    />
                )}
                {!books.length && (
                    <h4>
                        Nothing in{" "}
                        <u>
                            <i>{label}</i>
                        </u>{" "}
                        shelf
                    </h4>
                )}
            </div>
        </div>
    );
};
const Books = ({ books, handleUpdateShelf }) => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((b) => {
                    return (
                        <Book
                            key={b.id}
                            book={b}
                            handleUpdateShelf={handleUpdateShelf}
                        />
                    );
                })}
            </ol>
        </div>
    );
};
export default BookShelf;
