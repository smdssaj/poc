import React from "react";
import { IoMdStar } from "react-icons/io"

import "../style/ratting.css"

export function Ratting({ rating }) {
    return (
        <div className="ratting-component">
            <div className="ratting-stars">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
            </div>
            <div className="ratting-ratio">
                {rating}/5
            </div>
        </div>
    )
}
