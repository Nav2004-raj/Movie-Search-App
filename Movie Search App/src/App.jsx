import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./Contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
