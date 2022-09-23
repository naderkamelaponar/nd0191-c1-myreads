/** بسم الله الرحمن الرحيم */
import Book from "./Book";
const BookShelf = (props) => {
    const { shelfTitle, books,update } = props;
    
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                {books.length ? (
                    <Books books={books} update={update} />
                ) : (
                    <h4>Nothing in <u><i>{shelfTitle}</i></u> shelf</h4>
                )}
            </div>
        </div>
    );
};
const Books = ({ books ,update}) => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map((b) => {
                    return <Book key={b.id} book={b} update={update}/>;
                })}
            </ol>
        </div>
    );
};
export default BookShelf;
