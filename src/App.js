import "./App.css";
import { useState } from "react";
import Search from "./Components/SearchPage";
import BookShelf from "./Components/BookShelfs";
function App() {
  
  const [showSearchPage, setShowSearchpage] = useState(false);
  
  const handleSearchPage= ()=>{
    setShowSearchpage(!showSearchPage)
  }
  return (
    <div className="app">
      {showSearchPage ? <Search setShowSearchpage={handleSearchPage}/> : 
      (
        <div className="list-books">
          <div className="list-books-title">
            <h1>بسم الله الرحمن الرحيم</h1>
            <h3>MyReads</h3>
          </div>
          <div className="list-books-content">
            <div>
            <BookShelf shelfTitle={"My reads"}/>
              <BookShelf shelfTitle={"Want to Read"} />
              <BookShelf shelfTitle={"Read"} />
            </div>
          </div>
          <div className="open-search">
            <a href="/#" onClick={handleSearchPage}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
