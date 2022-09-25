import "./App.css";
import HomePage from "./Components/pages/HomePage";
function App() {
    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>بسم الله الرحمن الرحيم</h1>
                    <h3>MyReads</h3>
                    <p>Udacity React nd</p>
                </div>
                <HomePage />
            </div>
        </div>
    );
}

export default App;
