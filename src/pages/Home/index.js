import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import BuyABook from '../BuyABook';

const Home = () => {
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
                `https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=${apiKey}`
            )
            .then((data) => {
                console.log(data.data.items);
                setBookList(data.data.items);
                // console.log(bookList);
            })
            .catch((err) => console.error(err));
    }

    // useEffect(() => {
    //     // getBook();
    // }, []);


    return (
        <div id="home-container" >
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange}
                            value={searchInput} />
                        <button className="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
            </nav>

            <div id="mt-5">
                {
                    bookList.map((item) => {
                        return <BuyABook item={item} />
                    })
                }
            </div>
        </div>


    );
}

export default Home;
