import React from "react";

import "../style/icon-radio.css"

export function IconRadio({ name, value, icon }) {
    return (
        <label className="icon-radio-component">
            <input type="radio" name={name} value={value} />
            <div className="icon-radio-body">
                <span className="icon-radio-body-icon">
                    <img src={icon} alt="can not load" />
                </span>
                <span className="icon-radio-body-title">
                    {value}
                </span>
            </div>
        </label>
    )
}
