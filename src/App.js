import logo from "./logo.svg";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { BookShelf } from "./components/BookShelf";
import { Search } from "./components/Search";

function App() {
  const styles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "500",
      textDecoration: isActive ? "underline" : "none",
      color: "#000",
    };
  };

  return (
    <div className="App">
      <nav className="navlinks">
        <NavLink style={styles} className="nav-item" to="/">
          Home page
        </NavLink>
        <NavLink style={styles} className="nav-item" to="/search">
          Search
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<BookShelf />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
