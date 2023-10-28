import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Pages/Home";
import Book from "./Components/Pages/Book";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="book" element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
