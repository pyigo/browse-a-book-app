import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import BuyABook from "../BuyABook";
import '../Home/home.css'

const Home = () => {
    const [trendingBooks, setTrendingBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState([]);
    const [nytApiKey, setnytApiKey] = useState(
        "jprYvif3avn8TWEgvLqYXzAHlPfB4bRi"
    );

    useEffect(() => {
        getTrendingBooks();
    }, []);

    const getTrendingBooks = async () => {
        try {
            const response = await axios.get(
                "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" +
                nytApiKey
            );

            // console.log(response.data.results.books);
            setTrendingBooks(response.data.results.books);
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="container">
            <h1>NYT Trending Books</h1>
            <div className="row">
                {trendingBooks &&
                    trendingBooks.map((trendingBook) => {
                        console.log(trendingBook)
                        return (
                            < div className='col-md-4 mb-4' >
                                <div className="shadow card h-100" key={trendingBook.id}>
                                    <img src={trendingBook.book_image} className="card-img-top img-fluid"
                                        alt="book-image" />
                                    <div className="card-body"  >
                                        <h3 className="card-title">{trendingBook.title}</h3>
                                        <h5 className="card-title">Author: {trendingBook.author}</h5>
                                        <h5 className="card-title">Category: {trendingBook.publisher}</h5>
                                        <div className="overflow-auto">{trendingBook.description}</div>

                                    </div>
                                    {/* <div className='card-footer'>
                                        <a href={props.item.saleInfo.buyLink} target="_blank" className="btn btn-primary me-2">Buy Book</a>
                                        <button className="btn btn-primary ms-2" onClick={() => addToMySelection(props.item)} >add to my selection</button>
                                    </div> */}
                                </div>
                            </div>
                        )

                    })}
            </div>
        </div >
    );
};

export default Home;
