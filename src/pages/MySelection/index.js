import React, { useEffect } from "react";
import BookItem from "../BuyABook/bookItem";
import { useState } from "react";

const MySelection = ({ props }) => {

    return (
        <div className="container">
            {/* <div className="row">
                {useState() &&
                    props.mySelection.map((item) => {
                        return <BookItem item={item} />;
                    })}
            </div>  */}
        </div>
    );

};

export default MySelection;
