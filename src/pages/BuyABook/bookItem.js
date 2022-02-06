import React from 'react';
import '../BuyABook/index';
import { useState } from 'react';


const BookItem = (props) => {
    const addToMySelection = (book) => {
        // We want to trigger this function to update our state
        // console.log("we added", book);
        // useState(setMySelection([...mySelection, book]));
        console.log(this.useState.mySelection)
    };

    return (
        <div className='col-md-4 mb-4' >
            <div className="card h-100">
                <img src={props.item.volumeInfo?.imageLinks?.thumbnail} className="card-img-top img-fluid"
                    alt="book-image" />
                <div className="card-body"  >
                    <h3 className="card-title">{props.item.volumeInfo?.title}</h3>
                    <h5 className="card-title">Author: {props.item.volumeInfo?.authors}</h5>
                    <h5 className="card-title">Category: {props.item.volumeInfo?.categories}</h5>
                    <div className="overflow-auto">{props.item.volumeInfo?.description}</div>

                </div>
                <div className='card-footer'>
                    <a href={props.item.saleInfo.buyLink} target="_blank" className="btn btn-primary me-2">Buy Book</a>
                    <button className="btn btn-primary ms-2" onClick={() => addToMySelection(props.item)} >add to my selection</button>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
