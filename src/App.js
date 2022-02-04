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

import BookItem from "./pages/BuyABook/bookItem";



const App = () => {
  //
  const [user, setUser] = useState("");
  const [bookList, setBookList] = useState([]);
  const [mySelection, setMySelection] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="genre" element={<Genre />} />
          <Route path="mySelection" element={<MySelection mySelection={mySelection} />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="buyAbook" element={<BuyABook />} />

        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
