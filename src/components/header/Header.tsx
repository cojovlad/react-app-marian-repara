import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

interface HeaderProps {
    pages: Array<{ title: string; path: string }>;
}

const Header: React.FC<HeaderProps> = ({pages}) => {
    return (
        <header className="header">

            <Link to="/">
                <img
                    className="logo"
                    src="assets/images/img.png"
                    alt="header-logo"
                />
            </Link>

            <nav className="nav">
                {pages.map((page, index) => (
                    <a key={index} href={page.path} className="nav-link">
                        {page.title}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;