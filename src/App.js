import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";


// pages
import Home from "./pages/Home";
import BuyABook from "./pages/BuyABook";

import MySelection from "./pages/MySelection";
import Login from "./pages/Login";

// contexts
import UserContext from "./Contexts/UserContext";

import BookItem from "./pages/BuyABook/bookItem";
import Footer from "./components/Footer";

// css
import './App.css'



const App = () => {
  //
  const [user, setUser] = useState("");
  const [bookList, setBookList] = useState([]);
  const [mySelection, setMySelection] = useState([]);

  const addToMySelection = (book) => {
    setMySelection([...mySelection, book])
  }

  console.log('App', mySelection)
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar />
        <div className="page-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="mySelection" element={<MySelection mySelection={mySelection} />} />
              <Route path="login" element={<Login setUser={setUser} />} />
              <Route path="buyAbook" element={<BuyABook addToMySelection={(book) => addToMySelection(book)} />} />

            </Routes>
          </div>
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default App;
