import React from "react";
import BookItem from "../BuyABook/bookItem";
import { useState } from "react";

const MySelection = ({ props }) => {
    return (
        <div className="container">
            <div className="row">
                {props.mySelection &&
                    props.mySelection.map((item) => {
                        return <BookItem item={item} />;
                    })}
            </div>
        </div>
    );
};

export default MySelection;
