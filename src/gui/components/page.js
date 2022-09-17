import React, { useState } from "react";
import { IoMdClose } from 'react-icons/io';

import "../style/page.css"

export function Page({ title, children, imgSrc, close }) {
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollHandler = (e) => {
        if (e.target.scrollTop >= 80) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false)
        }
    };

    return (
        <div className="app">
            <header className="app-header" style={{ boxShadow: isScrolled? "": "none" }}>
                <span className="header-close-icon" onClick={()=> close()}>
                    <IoMdClose />
                </span>
                <div className="header-upper-title" style={{ opacity: isScrolled ? 100 : 0 }}>
                    {title}
                </div>
                <div className="header-user-image">
                    <img src={imgSrc} alt="error occurred"></img>
                </div>
            </header>
            <div className="app-content" onScroll={(e) => scrollHandler(e)}>
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    )
}
