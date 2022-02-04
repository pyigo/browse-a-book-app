import React from 'react';
import Home from '../Home';
import '../BuyABook/index';
import './buyAbook.css'

const BookItem = (props) => {
    return (
        <div className='col' >
            <div className="card" >
                <img src={props.item.volumeInfo?.imageLinks?.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{props.item.volumeInfo?.title}</h3>
                    <h5 className="card-title">Author: {props.item.volumeInfo?.authors}</h5>
                    <h5 className="card-title">Category: {props.item.volumeInfo?.categories}</h5>
                    <p className="card-text overflow-auto">{props.item.volumeInfo?.description}</p>
                    <a href="#" className="btn btn-primary">Buy Book</a>
                    <button className="btn btn-primary">add to my selection</button>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
