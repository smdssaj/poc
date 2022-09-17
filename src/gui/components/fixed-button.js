import React from "react";

import "../style/fixed-button.css"

export function FixedButton({ Icon, title, onClick }) {
    return (
        <div className="fixed-button-component" onClick={()=> onClick()}>
            <span>
                <Icon />
            </span>
            <span>
                {title}
            </span>
        </div>
    )
}
