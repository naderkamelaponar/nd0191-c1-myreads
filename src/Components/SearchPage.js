/** بسم الله الرحمن الرحيم */
import { useState, useEffect } from "react";
import { getAll } from "../BooksAPI";
import Book from "./Book";
const SearchPage = ({ setShowSearchpage }) => {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const getBooks = async () => {
            const res = await getAll();
            setBooks(res);
        };
        getBooks();
    }, [setBooks]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    href="/"
                    className="close-search"
                    onClick={setShowSearchpage}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {books &&
                        books.map((b) => {
                            return <Book key={b.id} book={b} />;
                        })}
                </ol>
            </div>
        </div>
    );
};
export default SearchPage;
