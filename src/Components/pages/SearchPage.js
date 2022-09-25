/** بسم الله الرحمن الرحيم */
import { useState, useEffect } from "react";
import { search } from "../../BooksAPI";
import { Link } from "react-router-dom";
import { update } from "../../BooksAPI";
import Book from "../Book";
const SearchPage = () => {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const getBooks = async () => {
            const res = await search(searchValue, 100);
            setBooks(res);
        };
        getBooks();
    }, [searchValue]);
    const handleUpdateShelf = async (book, newShelf, label) => {
        await update(book, newShelf);
        const newBook = { ...book, shelf: newShelf };
        setBooks(
            books.map((b) => {
                return b.id === book.id ? newBook : b;
            })
        );
        window.alert(`The Book ${book.title} has moved to ${label}`);
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">
                    Close
                </Link>
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
                    {books && books.length ? (
                        books.map((b) => {
                            return (
                                <Book
                                    key={b.id}
                                    book={b}
                                    handleUpdateShelf={handleUpdateShelf}
                                />
                            );
                        })
                    ) : !searchValue.length ? (
                        <h4>Write something to start searching</h4>
                    ) : (
                        <h4>No Books were found</h4>
                    )}
                </ol>
            </div>
        </div>
    );
};
export default SearchPage;
