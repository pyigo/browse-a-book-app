import React, { useEffect } from "react";
import BookItem from "../BuyABook/bookItem";
import { useState } from "react";


const MySelection = ({ props }) => {

    return (
        <div className="container">
            Add  books here, buy later
            <p>(props.item)</p>
        </div>
    );

};

export default MySelection;
