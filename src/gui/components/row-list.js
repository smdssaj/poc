import React from "react";

export function RowList({ children }) {
    return (
        <div className="row-list" style={{
            display: "flex", overflow: "scroll", marginTop: "2rem"
        }}>
            {children}
        </div>
    )
}
