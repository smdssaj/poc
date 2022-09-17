import React from "react";

import "../style/slider.css"

export function Slider({ isOpen, children }) {
    return (
        <div className="slider-component" style={{ bottom: isOpen ? "0" : "-100vh" }}>
            <div className="slider-background" style={{ backgroundColor: isOpen ? "#0000003f" : "#00000000" }}></div>
            <div className="slider-body" style={{ bottom: isOpen ? "" : "-100vh" }}>
                <div className="slider-content">
                    {children}
                </div>
            </div>
        </div>
    )
}
