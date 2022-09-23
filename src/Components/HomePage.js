/** بسم الله الرحمن الرحيم */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";
const HomePage = () => {
    const [books, setBooks] = useState([]);
   
    useEffect(() => {
        
        const booksData = async () => {
            const res = await getAll();
            setBooks(res);
        };
        booksData()
    }, [setBooks]);
    const read = books.filter((b) => {
        return b.shelf === "read";
    });
    const currentlyReading = books.filter((b) => {
        return b.shelf === "currentlyReading";
    });
    const wantToRead = books.filter((b) => {
        return b.shelf === "wantToRead";
    });

    return (
        <div>
            <BookShelf
                shelfTitle={"Currently reading"}
                books={currentlyReading} update={setBooks}
            />
            <BookShelf shelfTitle={"Want to Read"} books={wantToRead} />
            <BookShelf shelfTitle={"My reads"} books={read} />
            <div className="open-search">
                <Link to="/search">add</Link>
            </div>
        </div>
    );
};
export default HomePage;
