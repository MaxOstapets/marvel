import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesPage from "./Pages/Movies/Movies";

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/tvshows" element={<MoviesPage />} />
            </Routes>
        </Router>
    );
}

export default PageRoutes;