import React from 'react';
import Home from '../Home';
import '../BuyABook/index'

const BookItem = (props) => {
    return (
        <div className='col' >
            <div className="card" >
                <img src={props.item.volumeInfo?.imageLinks?.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">{props.item.volumeInfo?.title}</p>
                    <link to="#" className="btn btn-primary">Buy Book</link>
                </div>
            </div>
        </div>
    );
}

export default BookItem;
