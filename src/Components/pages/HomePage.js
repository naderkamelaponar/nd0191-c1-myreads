/** بسم الله الرحمن الرحيم */
import { Route, Routes } from "react-router-dom";
import Shelfs from "../Shelfs";

import SearchPage from "./SearchPage";
const HomePage = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Shelfs />} />
                <Route path="/search" element={<SearchPage />} />
            </Routes>
        </div>
    );
};
export default HomePage;
