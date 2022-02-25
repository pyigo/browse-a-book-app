import React from 'react';
import '../BuyABook/index';
import '../MySelection/index'
import { useState } from 'react';
import BuyABook from '../BuyABook/index';
import { changeState } from 'react'
import { useEffect } from 'react';


const BookItem = ({ item, addToMySelection }) => {

    return (
        <div className='col-md-4 mb-4' >
            <div className="shadow-lg card h-100" key={item.id} >
                <img src={item.volumeInfo?.imageLinks?.thumbnail} className="card-img-top img-fluid"
                    alt="book-image" />
                <div className="card-body" >
                    <h3 className="card-title">{item.volumeInfo?.title}</h3>
                    <h5 className="card-title">Author: {item.volumeInfo?.authors}</h5>
                    <h5 className="card-title">Category: {item.volumeInfo?.categories}</h5>
                    <div className="overflow-auto">{item.volumeInfo?.description}</div>

                </div>
                <div className='card-footer'>
                    <a href={item.saleInfo.buyLink} target="_blank" className="btn btn-primary me-2">Buy Book</a>
                    <button className="btn btn-primary ms-2" onClick={() => addToMySelection(item)} >add to my selection</button>

                </div>
            </div>
        </div>
    );
}

export default BookItem;
