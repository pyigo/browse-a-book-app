import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import BuyABook from "./pages/BuyABook";
import Genre from "./pages/Genre";
import MySelection from "./pages/MySelection";
import Login from "./pages/Login";

// contexts
import UserContext from "./contexts/UserContext";

// axios
import axios from "axios";
import BookItem from "./pages/BuyABook/bookItem";

// Api call using Axios

const App = () => {
  //
  const [user, setUser] = useState("");
  const [bookList, setBookList] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home setUser={setUser} />} />
          <Route path="genre" element={<Genre />} />
          <Route path="mySelection" element={<MySelection />} />
          <Route path="login" element={<Login />} />
          <Route path="buyAbook" element={<BuyABook />} />
          <Route path="bookItem" element={<BookItem />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
