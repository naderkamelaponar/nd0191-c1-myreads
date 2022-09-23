import "./App.css";
import { useState } from "react";
import HomePage from "./Components/HomePage";
function App() {
    //const [showSearchPage, setShowSearchpage] = useState(false);
    // eslint-disable-next-line
    const [page, setPage] = useState("/"); 
    
    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>بسم الله الرحمن الرحيم</h1>
                    <h3>MyReads</h3>
                </div>

                {page === "/" && <HomePage />}
            </div>
        </div>
    );
}

export default App;
