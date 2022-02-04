import React from 'react';

const MySelection = ({ mySelection }) => {
    return (
        <div>

            {mySelection &&
                mySelection.map((book) => (
                    <div className="..." key={book.item}>
                        {/* <img
                            src={pokemon.sprites.front_shiny ?
                                pokemon.sprites.front_shiny : pokemon}
                            className="card-img-top"
                            alt="..."
                        /> */}

                        {/* <img src={
                            pokemon.sprites.front_shiny ||
                            pokemon.sprites.front_default ||
                            pokemon.sprites.other['official-artwork'].front_default
                        }
                            className="card-img-top"
                            alt="..."
                        /> */}
                        <div className="card-body">
                            <h5 className="card-title">{book.item.volumeInfo}</h5>
                            <p className="card-text">Order:</p>

                            <link href="" className="btn btn-primary">
                                Go somewhere
                            </link>
                        </div>
                    </div>
                ))
            }
        </div >
    );
}

export default MySelection;
