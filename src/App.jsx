import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";

import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

import {
  StudentProvider,
  StudentContext
} from "./context/StudentContext";

import "./App.css";

function Navigation() {
  const { favourites } = useContext(StudentContext);

  return (
    <nav className="navbar">
      <h2>🎓 Student Hub</h2>

      <div className="nav-links">
        <Link to="/">Student List</Link>

        <Link to="/favourites">
          ❤️ Favourites ({favourites.length})
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <StudentProvider>
      <BrowserRouter basename="/-Favourite-Student-List-React">
        <Navigation />

        <Routes>
          <Route path="/" element={<StudentList />} />

          <Route
            path="/favourites"
            element={<FavouriteStudents />}
          />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;