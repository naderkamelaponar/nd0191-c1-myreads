/** بسم الله الرحمن الرحيم */
import ShelfChanger from "./ShelfChanger";
const Book = (props) => {
    const { title, authors, imageLinks } = props.book;
    const thumbnail =
        imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : "";
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${thumbnail})`,
                    }}
                ></div>
                <ShelfChanger
                    book={props.book}
                    handleUpdateShelf={props.handleUpdateShelf}
                />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    );
};
export default Book;
