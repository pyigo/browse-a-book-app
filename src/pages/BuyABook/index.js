import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BookItem from "./bookItem";
import MySelection from "../MySelection";
import UserContext from "../../Contexts/UserContext";
import Login from "../SignIn";
import './buyABook.css'



const BuyABook = ({ addToMySelection }) => {
    const [bookList, setBookList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [apiKey, setApiKey] = useState(
        "AIzaSyD6gzqxZbeUpHVm01tY5cbYdDnE5bRmE8Q"
    );


    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}&maxResults=40`
            )
            .then((data) => {
                console.log(data.data.items);
                setBookList(data.data.items);
                // console.log(bookList);
            })
            .catch((err) => console.error(err));
    };


    console.log('buy a book', addToMySelection)
    return (
        <div id="home-container" >
            {/* <nav className="navbar navbar-light bg-light"> */}
            <div className="container-sm mt-5" >
                <form className="d-flex" onSubmit={handleSubmit}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search Book, Author"
                        aria-label="Search"
                        onChange={handleChange}
                        value={searchInput}
                    />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
            {/* </nav> */}

            <div className="container mt-5">
                <div className="row" >
                    {bookList.map((item) => {
                        return <BookItem item={item} addToMySelection={(book) => { console.log('We are inside buy a boo', book); addToMySelection(book) }} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default BuyABook;
