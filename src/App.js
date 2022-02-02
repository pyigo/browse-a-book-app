import { useState, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

// components
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import BuyABook from "./pages/BuyABook";
import Genre from "./pages/Genre";
import MySelection from "./pages/MySelection";

// contexts
import UserContext from "./contexts/UserContext";

// axios
import axios from "axios";

// Api call using Axios

const App = () => {


  // 
  const [user, setUser] = useState("");
  const [bookList, setBookList] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyD6gzqxZbeUpHVm01tY5cbYdDnE5bRmE8Q");


  useEffect(() => {
    // getBook();
  }, [])

  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookList + "&key=" + apiKey)
    .then(data => {
      console.log(data)
    })


  setBookList(bookList);

  // const getBook = async () => {
  //   try {
  //     const response = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + bookList + "&key=" + apiKey"
  //     );
  //     setBookList(response.data);
  //   } catch (error) {
  //     console.log(error)
  //   }


  // }
  ;

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home setUser={setUser} />} />
          <Route path="genre" element={<Genre />} />
          <Route path="mySelection" element={<MySelection />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
};

export default App;
