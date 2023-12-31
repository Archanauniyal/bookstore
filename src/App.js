import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Pages/Home";
import Book from "./Components/Pages/Book";
import Wholsale from "./Components/Pages/Wholesale"
import Ourblog from "./Components/Pages/Ourblog"
import Contactus from "./Components/Pages/Contactus"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="book" element={<Book />}></Route>
        <Route path="wholesale"element={<Wholsale/>}></Route>
        <Route path="ourblog"element={<Ourblog/>}></Route>
        <Route path="contactus"element={<Contactus/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
