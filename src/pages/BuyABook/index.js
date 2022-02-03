import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BookItem from "./bookItem";

const BuyABook = () => {
    const [bookList, setBookList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [apiKey, setApiKey] = useState(
        "AIzaSyD6gzqxZbeUpHVm01tY5cbYdDnE5bRmE8Q"
    );
    const [mySelection, setMySelection] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`
            )
            .then((data) => {
                console.log(data.data.items);
                setBookList(data.data.items);
                // console.log(bookList);
            })
            .catch((err) => console.error(err));
    };

    const addToMySelection = (book) => {
        // We want to trigger this function to update our state
        console.log("we added", book);
        setMySelection([...mySelection, book]);
    };

    return (
        <div id="home-container">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleChange}
                            value={searchInput}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </nav>

            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {bookList.map((item) => {
                        return <BookItem item={item} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default BuyABook;
