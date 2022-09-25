/** بسم الله الرحمن الرحيم */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI";
import BookShelf from "./BookShelf";
const Shelfs = () => {
    const [read, setRead] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const handleUpdateShelf = async (book, newShelf, label) => {
        const res = await update(book, newShelf);
        if (res) await booksData();
        window.alert(`The Book ${book.title} has moved to ${label}`);
    };
    const booksData = async () => {
        const res = await getAll();
        setRead(
            res.filter((b) => {
                return b.shelf === "read";
            })
        );
        setCurrentlyReading(
            res.filter((b) => {
                return b.shelf === "currentlyReading";
            })
        );
        setWantToRead(
            res.filter((b) => {
                return b.shelf === "wantToRead";
            })
        );
    };
    useEffect(() => {
        booksData();
    }, [setRead, setCurrentlyReading, setWantToRead]);
    return (
        <div>
            <BookShelf
                label={"Currently reading"}
                books={currentlyReading}
                handleUpdateShelf={handleUpdateShelf}
            />
            <BookShelf
                books={wantToRead}
                label={"Want to Read"}
                handleUpdateShelf={handleUpdateShelf}
            />
            <BookShelf
                books={read}
                label={"Read"}
                handleUpdateShelf={handleUpdateShelf}
            />
            <div className="open-search">
                <Link to="/search">add</Link>
            </div>
        </div>
    );
};
export default Shelfs;
